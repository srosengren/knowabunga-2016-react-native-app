
* Yes, native
* Yes, JSX
* Flexbox
* Learn once, write anywhere

````
npm install -g react-native-cli
react-native init nameofproject
cd nameofproject
react-native run-{ios|android}
````

````
ws://knowabunga-2016-react-native.azurewebsites.net
{type: 'message',content:'stuff',username: 'me'}
```

surprisingly usable
It wasn't as bad as i thought --Joel
It's cool
Everything's better than native
Easy to start a new app
Builds a lot faster than native compile. hot/live reload
Any IDE is nice
You kind of want to write html style react. And CSS kind of style
Documentation for asyncStorage was incorrect.
Seems viable for production, facebook uses it in production

Knowabunga 2016 - React Native

The secret goal of the React Native hackalong during knowabunga was to find out if React-Native was a good alternative for quickly prototyping native applications, if it was viable for production applications, and how fast a web/React developer could get up to speed with it. This was to be tested by having everyone building their own basic chatapplication that talked to a websocket server, and send packages to eachother. This would demonstrate how to provide input, save it as state, render views inside of a listview and use the network APIs, the extra assignments were, trying to save everything to localstorage, styling it, and create some animations.

The pros:
* Very fast to scaffold a basic app once you got the environment installed (very easy for iOS some work for Android).
* Hot/live reload is so much better than the normal build and restart approach of native applications.
* It was way easier for web/js developers to get up and running than them learning native, even for those that had never seen React.
* Using any IDE is nice.
* Most of the NPM packages work directly, as long as they don't have a dependency on the DOM.
* You can keep most, if not all of the business logic from your existing React apps.
* Flexbox and mostly css styling felt familiar.

The cons:
* You kind of want to write HTML instead of using React Native views, at least in the beginning.
* You cannot reuse your existing React application views, but it could be possible to search and replace lots of stuff.
* Some differences between the styling and normal CSS that you have to find, animation for instance.
* Some documentation (localstorage) had not kept up with the React Native teams development.

Conclusions:
We found that React Native would be very well suited for prototyping applications. The easiest way to do this for web devs otherwise would be to use hybrid apps or "native feel" web frameworks. That doesn't really give the same look and feel as a truly native application.
We also figure that React Native is production ready, not that we got that far in our own experiments but fom what we've read and by looking at how feature complete it is.