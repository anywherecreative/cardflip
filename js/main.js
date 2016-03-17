$(document).ready(function() {
	/*
		this basically asks the browser to wait until the page is fully loaded
		before running this code.  The reason this is important is because
		if the browser hasn't rendered our code yet then the things we are scripting
		such as images may not be there yet!
	*/
	/*
		we're using a technique called prefetching to download our image before
		the user needs it, this way it doesn't need to be loaded when we flip
		our card over!
	*/
	var aceSpades = new Image();
	aceSpades.src = 'images/ace-spades.png';
	var twoSpades = new Image();
	twoSpades.src = 'images/two-spades.png';
	var threeSpades = new Image();
	threeSpades.src = 'images/three-spades.png';
	var fourSpades = new Image();
	fourSpades.src = 'images/four-spades.png';
	var fiveSpades = new Image();
	fiveSpades.src = 'images/four-spades.png';


	/*
		I'm going to introduce you to a new concept in Javascript called an array.
		an array is just a collection of elements that we can reference using a key.

		You can think of an array like a deck of cards where the ACE of spades might
		have a key of 1.  The only difference is that in Javascript the key starts
		at 0.
	*/

	var cards = new Array();
	/*
		so above I made what's called a variable called cards.  A variable holds
		information for us such as a name, or a number.  For example if I were to type

		var myName = "Jeff" I would have a variable with my name in it that I could
		use later on in my program!

		the next part of this is the = new Array() the equals sign is just like you
		might find in math it lets you assign a value to a variable in my example
		about I am using it to assign "Jeff" to myName.

		after that is the new keyword.  This is used to make a new instance of what
		is known as an object.  An object is the name given to an "instance" of a class
		a class is a way to group code together that represents something for
		example say I wanted to make a program to keep track of my friends I
		might make a class called Friend.

		A class can have it's own variables, and it's own methods (also known as
		a function which I will explain later). A Class generally starts with an
		uppercase letter (just like any proper name) which is why I used a capital
		A in Array.

		Don't worry if this is all a lot to make sense of at this point. All you
		need to remember is that you can make an array in js by using

		var myVariable = new Array(); where myVariable is any name you want to give to
		your new variable.
	*/

	/*
		now lets add some content to our array.  We do this very similarly to how
		we would assign something to a regular variable.

		in a regular variable we would do something like

		var myVariable = "my stuff";

		in array we use syntax like this:
	*/
	cards[0] = "images/ace-spades.png";
	/*
		here we've used the path to our ace of spades and
		assigned it to cards[0].

		now if we want to get the information back out
		of our array we simply need to call
		cards[0] again and we'll get "images/ace-spades.png"

		I'm going to go ahead an add all of our other cards to
		our array only I'm going to add each one two times since we
		want to see each card on the field twice.

		Notice how the number goes up by one each time i add a card?
		that's because each item in our array needs a unique key!
	*/
	cards[1] = "images/ace-spades.png";
	cards[2] = "images/two-spades.png";
	cards[3] = "images/two-spades.png";
	cards[4] = "images/three-spades.png";
	cards[5] = "images/three-spades.png";
	cards[6] = "images/four-spades.png";
	cards[7] = "images/four-spades.png";
	cards[8] = "images/five-spades.png";
	cards[9] = "images/five-spades.png";

	/*
		now that we have all our cards added we're going to use a function to
		randomize them in the array!  kind of like shuffling actual cards.

		I've used a function called shuffle which I located on a popular website
		called stackoverflow.  Using small pieces of code like this is not uncommon
		in programming and allows you to focus on developing your new app without
		re-inventing the wheel, it's important however you read the license and give
		proper credit as necessary.

		below I will show you how we can use our shuffle function to shuffle our
		array randomly.
	*/

	cards = shuffle(cards);

	/*
		not to bad right?  now we just need to add them to our new cards.
		I'll be using the data attribute to assign each card from our array
		to our actually cards.  I've described the data attribute in detail below
		so have a look if you need some help understanding it!.
	*/
	$('.card').each(function(index) {
		/*
			ok so this is a little strange looking I bet! so let's go through it.

			we know that jquery uses selectors that look like css to figure out
			what elements you want to work with.  .each is a helper function in
			jquery and lets us go through each item in the selector indivdually
			so in our case we can go through each card on the field one by one to
			tell it which card in our array it represents!

			in the above function we've used a variable called index to record
			the number of the card we are currently on.  We'll use that number to
			select our item from the array.
		*/
		$(this).data('card',cards[index]);
		/*
			as you can see above we are using the index to select our card from
			our cards array. So the code above in plain english is
			assign the card with position x on the field the value from cards where
			the key is also x to the data value card.

			if you are having some trouble understanding the above let me know and
			I can make a few examples for you!
		*/
	});

	/*
		at this point all of our cards are assigned so we can use that information
		to show the right card when it's flipped over.
	*/
 	/*
		jQuery uses css selectors to determine what elements on a page we
		want to work with.  in this case we are using the class operator
		and looking for all the elements with class card.  this will look
		like class="card" in the code.
	*/
	$('.card').click(function() {

		if($(this).data('flipped') == true) {
			/*
				so we're doing a few new things here, so I'll go through each piece
				of this new code.

				the first part is if( it works similar to how you might see it work
				in regular english.  Basically it asks the program to evaluate the
				condition inside of the brackets and if it's true, then run the code
				between the braces (the { and })

				The next part is the $(this) jquery uses a dollar sign to signify you
				want to use a jQuery function inside that is the word this, basically
				this means you want to use the object that you selected above in our case
				the card the user clicked on.

				after that we have .data this is a special function that lets us access and
				also store data with our elements, this way we can keep information about
				them that we can use later in our scripts such as now.  We're checking if
				the card is flipped.  If the game is just starting then it can't be since
				we haven't had a chance to flip a card!

				after that we have == this may seem strange at first, but it will make
				more sense once you learn it.

				in Javascript you can assign something to a variable such as
				gender = 'girl'; in this case we have assigned the word girl to gender.
				when we want to compare something however we don't want to change it's value
				so we use == this says does the thing on the left equal the thing on the right.

				you may also see === don't worry about this to much for now, however it means
				does the item on the left have the exact same type and value as the thing on the right.
				the best way to explain this is an example.

				if I were to compare 0 == false this would evaluate to true.  The reason for this is
				because in Javascript 0 is equivlant to false and 1 is equivlant to true. However
				if I were to compare 0 === false it would evaluate to false because 0 is a number and
				false is what's called a boolean (true and false are boolean values)

				don't worry to much about the === just yet however you can learn more about it when you
				are more comfortable.
			*/

			//if our card is already flipped over then we should flip it back.
			$(this).attr('src','images/back.png');
			/*
				the above code introduced a new special function called attr this is short for
				attribute.  An attribute is the information we assign to an element for example
				in our game we have <img src="back.png" /> src in this case is our attribute and
				we have assigned it a value of back.png.

				in our code you'll see two different strings (the text between the ') seperated
				by a comma.  The first string is the attribute we want, and the second string sets
				it's value. in this case we are setting src to images/back.png

				When we pass information to a function like this we call the items
				seperated by a comma a paramater.  Paramaters can be strings, but the can also be
				numbers, booleans (true or false) or even other objects (such as an object, or even a
				function)

				so taken together our code says if the card is flipped over then flip it back to back.png
			*/

			$(this).data('flipped',false);
			/*
				remember in our if statement we checked if the card was flipped by checking for the data
				we assigned to it?  Well in this case we are actually assigning some data.  much like the
				attr function the data function takes two paramaters the first gives our data a key so we can
				call it again later, and the second thing we've passed to it is the boolean false to say it
				is not flipped.
			*/
		}
		else {
			/*
				else is a special statement that we can use as a kind of catch-all with if.  When our
				if statement is false our program can use else to catch all other conditions for example

				if you are holding something then
					say "you are holding something!"
				else
					say "you are not holding anything!"

				the example above is not real code but illistrates how an if and an else statement work
				if the if isn't true then the else will run.
			*/
			$(this).attr('src',$(this).data('card'));
			/*
				so we've changed the above code a little bit.  Remember above when we assigned
				our card from the cards array to card for each card?  Well here we are using
				that exact information to show which card the user has clicked.

				Try clicking on a card in our program!  Now refresh the page! did it change?
			*/
			$(this).data('flipped',true);
			/*
				here we have our data function again, only this time we are saying true as in our
				card is infact flipped over.
			*/

			/*
				we're going to count how many cards are flipped over.  We are only
				allowed to have two and after the second one is flipped we need to
				do some checking.

				For now we're just going to see if two are flipped, and if they are we
				will flip them back over.
			*/
			var numFlipped = $('.card').filter(function() {
					return $(this).data('flipped');
			}).length;
			/*
				this is a bit strange at first but i'll walk through it with you.
				basically we are asking for all the cards (the $('.card') part) and
				we're filtering that result based on a function that quickly checks
				if the card is flipped.  If it is then the card is added to our selector.

				the last part of the code is .length this just asks for the number of
				elements (cards) that have been selected.  we then assign the result to
				our numFlipped variable.
			*/
			if(numFlipped == 2) {
				//if exactly two cards are flipped
				alert('two cards flipped over');
				/*
					the above code is an alert, and it's use is to show a dialog box to a
					user that they must press ok to before continuing

					We'll be using this a bit more next week, but for now it shows how the
					game can work.
				*/
				
				/*
					we will be doing some additional work in here to see if they match
					but we can cover that next week!  If you want to see if you can figure
					out how we might do that!
				*/

				//turn all our cards back over
				$('.card').data('flipped',false);
				$('.card').attr('src','images/back.png');
			}

		}
	});
});

/**
	this function sorts an array randomly and then returns it to us.
	for our purposes you can think of it like shuffling our deck of cards.

	This code was taken from <http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array>
	and was not generated by me.

	don't worry to much about understanding it as this is a little more advanced
	stuff but we can use it freely to accomplish what we need to!
**/
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
