#### Description for reviewers

*First thing to mention is that I hope it is not a test for creating documentation. 
This is just an assignment explanation*. 

I received this assignment at 17:51 but started at 6:40 due to video call on my current job.
It is 9:20 right now so I spend around 2,5 h for this task.
But this should not affect your judgement.

First thing I did - I read the assignment task carefully and created boilerplate project (this took 20 - 30 minutes).

Then I setup Redux (actions, constants, selectors, reducers) and react router (another 20 minutes).

Using [awesome react](https://github.com/enaqx/awesome-react) I first installed blue-print UI library because this one have date range picker 
and I knew that. But unfortunately this one wasn't compatible with yarn (or maybe CRA) and I had to install another one - ant design.
But I lost around 20 minutes trying to fix blueprint and then 20 minutes on setup for ant-design. At the end I had current date selected and 3 months 
from now as well with moment js help.

Then I setup axios for HTTP requests and redux-thunk for async actions. I am not familiar with launchlibrary API so it took
some time to figure how to get launches according to provided dates and store it to Redux state.

And then I tried to find proper Maps library and this, along with initial setup took me like 40 minutes at least. And get API key
for google maps also took time (20 minutes or so). So when it finally worked - I had no more time left and had to proceed with explanation.

I just added 2 simple square markers to the map and rendered list of names for launches for 3 months in advance. Just to show it is there.
Yeah, also a loading gif component.
I couldn't find lat and lng for them just to quickly render all those markers on the map.

I also didnt initially setup with TS coz I knew this might take more time and I was already out of schedule.

##### TIMELINE


 - 30 - boilerplate and task reading 
 - 20 - Redux and router
 - 40 - UI library and moment js 
 - 40 - Google map and API key
 - 20 - README
 
 That was my 2,5 hours for this task.
 This is not an excuse (even if it is not that much completed) but my timeline explanation.
 
 #### Setup
 
 Just install dependencies using `yarn install` and run `yarn start` to start project on `http://localhost:3000/`
 
 



