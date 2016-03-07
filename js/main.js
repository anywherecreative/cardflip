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
			$(this).attr('src','images/ace-spades.png');
			/*
				we're using similar code above so I'm not going to explain it again but in this case 
				we're saying if it's not flipped over then change the src attribute to images/ace.png
				
			*/
			$(this).data('flipped',true);
			/*
				here we have our data function again, only this time we are saying true as in our 
				card is infact flipped over. 
			*/
		}
	});
});