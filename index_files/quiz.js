/*globals jQuery:true,Handlebars:true*/
jQuery(function($) {
    'use strict';
    var Quiz = window.Quiz || {};
    window.Quiz = Quiz;

    var doc = $( document );

    Quiz.template = {};
    Quiz.template.answers = Handlebars.compile( $( '#quiz-content-template' ).html() );
    Quiz.template.books = Handlebars.compile( $( '#quiz-book-template' ).html() );

    Quiz.placeholder = $( '#quiz-content' );
    Quiz.htmlControls = $( '#quiz-controls' );
    Quiz.fixedTop = $( '#quiz-fixed-top' );
    Quiz.bodyBGYPosition = 73;

    Quiz.answerSet = function( ev ) {
        ev.preventDefault();
        var self = $( this ),
            target = '',
            dataObj,
            templateData;

        // pega o valor do alvo retirando o #
        target = self.attr( 'href' ).substring( 1 );

        dataObj = Quiz.questions[ target ];
        templateData = Quiz.getTemplateData( dataObj, target );
        Quiz.updatePage( templateData );
    };

    Quiz.historyBack = function( ev ) {
        ev.preventDefault();
        $( '.quiz-wrapper:last' ).remove();

        var lastQuizWrapper = $( '.quiz-wrapper:last' ),
            target = lastQuizWrapper.data( 'key' ) || 'first',
            remainingPlaceholder = Quiz.htmlControls.find( '.quiz-remaining-strong' ),
            contentOuterHeight,
            lastQuizHeight,
            remainingBooks,
            newRemainingBooks,
            placeholderTop = 0;

        $( window ).scrollTop( 0 );

        if ( target ) {
            contentOuterHeight = Quiz.placeholder.outerHeight();
            lastQuizHeight = lastQuizWrapper.outerHeight();
            placeholderTop = -( contentOuterHeight - lastQuizHeight );
            remainingBooks = {
                x : remainingPlaceholder.text() || 0
            };
            newRemainingBooks = Quiz.getRemainingBooks( target );

            $( remainingBooks ).animate(
                { x : newRemainingBooks },
                {
                    duration : 700,
                    step: function( x ) {
                        x = Math.round( x );
                        remainingPlaceholder.text( x );
                    }
                }
            );
            $( '.quiz-back-button' ).show();
        } else {
            remainingPlaceholder.text( 0 );
            Quiz.htmlControls.removeClass( 'answers' );
            Quiz.fixedTop.removeClass( 'answers' );
            $( '.quiz-back-button' ).hide();
        }

        if ( target === 'first' ) {
            $( '.quiz-back-button' ).hide();
        }

        Quiz.placeholder.css({
            marginTop : placeholderTop
        });
    };

    Quiz.getTemplateData = function( answerObj, target ) {
        var extractedAnswers = Quiz.getAnswers( answerObj ),
            templateData = {
                title : answerObj.title,
                face : answerObj.face || '',
                keys : extractedAnswers[0],
                type : ( extractedAnswers[1] || type),
                remainingBooks: Quiz.getRemainingBooks( target )
            };

        if ( target !== 'first' ) {
            templateData.target = target;
        }

        return ( extractedAnswers[0] ? templateData : '' );
    };

    Quiz.getAnswers = function( answerObj ) {
        var templates = [ 'answers', 'books' ],
            i = 0,
            values,
            key;

        for ( i = 0 ; i < templates.length ; i++ ) {
            if ( answerObj.hasOwnProperty( templates[ i ] ) ) {
                key = templates[ i ];
                break;
            }
        }

        if ( key === 'answers' ) {
            values = Quiz.processAnswer( answerObj[ key ] );
        } else {
            values = answerObj.books;
        }


        return [ values, key ];
    };

    Quiz.updatePage = function( data ) {
        var processedTemplate = Quiz.template[ data.type ]( data ),
            contentOuterHeight = Quiz.placeholder.outerHeight(),
            remainingPlaceholder = Quiz.htmlControls.find( '.quiz-remaining-strong' ),
            remainingBooks = {
                x : remainingPlaceholder.text() || 0
            };

        Quiz.placeholder.append( processedTemplate );

        $( window ).scrollTop( 0 );
        Quiz.placeholder.css({
            marginTop : -contentOuterHeight
        });

        Quiz.htmlControls.addClass( data.type );
        Quiz.fixedTop.addClass( data.type );

        $( '.quiz-back-button' ).toggle( !!data.target );

        $( remainingBooks ).animate(
            { x : data.remainingBooks },
            {
                duration : 700,
                step: function( x ) {
                    x = Math.round( x );
                    remainingPlaceholder.text( x );
                }
            }
        );

        $( '.quiz-avatar' ).addClass( 'face-avatar-' + data.face );

        Quiz.bodyBGYPosition = Quiz.bodyBGYPosition - 350;

        $( 'body' ).css( {
            backgroundPosition : '0 ' + Quiz.bodyBGYPosition + 'px'
        });
    };

    Quiz.processAnswer = function( answers ) {
        var processedAnswer = [];
        for ( var answer in answers ) {
            if ( answers.hasOwnProperty( answer ) ) {
                processedAnswer.push({
                    href : answer,
                    text : answers[ answer ]
                });
            }
        }
        return processedAnswer;
    };

    Quiz.getRemainingBooks = function( question ) {
        var soma = 0,
            questionObj;

        if ( !Quiz.questions.hasOwnProperty( question ) ) {
            return soma;
        }

        questionObj = Quiz.questions[ question ];

        if ( questionObj.hasOwnProperty( 'books' ) ) {
            soma += questionObj.books.length;
        } else if ( questionObj.hasOwnProperty( 'answers' ) ) {
            for ( var answerID in questionObj.answers ) {
                soma += Quiz.getRemainingBooks( answerID );
            }
        }

        return soma;
    };

    Quiz.reload = function( ev ) {
        ev.preventDefault();
        window.location.reload();
    }

    doc.on( 'click', '.quiz-answer-link', Quiz.answerSet );
    doc.on( 'click', '.quiz-back-button', Quiz.historyBack );
    doc.on( 'click', '.reload', Quiz.reload );

});

