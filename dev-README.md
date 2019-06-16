# Shutl Front End test feedback

This was good exercise, that explores a few aspects of my day to day work. It had the bit that you run a separate data server that required CORS header added in the response. It also tests presentation and semantics in different page structures. 

If I am completely honest, it took me longer than 3 hours to bring it to the state it is. And if I had more time I would have added tests. But (un)fortunately it is Fathers day and I have other commitments. 

I have tried to keep the structure simple and adhering to standards. 

I have decided to organise the files onto a logical structure based on their position in regards to other (parent) components. This may not be the case in terms of more complex application. 

Based on the timeframe I have kept the styling to minimal. A couple of notes on that, added SASS support in `webpack.config.js` and kept component specific styles together with the corresponding `.jsx` file. With the idea of being easy to find and portable. 

I did not get a chance to provide anything to handle the form submission. 
