


# Stonki 📈
![Preview](https://i.imgur.com/owVov9Y.png)
Stonki is a minimalist NASDAQ stock monitoring application. This app was built in less than a week for a showcase project at Turing. Stonki uses React and FinancialModelingPrep api to show the user up to date information about their favorite stocks. It also allows the user to store favorites and keep track of profits if buy price is recorded up front. User focus is a mobile friendly interface, and general ease of use.


## Authors / Credits
- [Nate S.](https://www.github.com/natesheridan)
- [FMP API](https://site.financialmodelingprep.com/) - Stock data
- [Recharts](https://recharts.org/en-US/) - Data charting/graphing
- [ReactIcons](https://react-icons.github.io/react-icons/) - Icon Library
- [AWS](https://aws.amazon.com/) - Deployment of app


## Technologies Used
 <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
<img alt="Cypress" src='https://img.shields.io/badge/cypress%20-%23404d59.svg?&style=for-the-badge&logo=Cypress&logoColor=white'/>
<img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
<img alt="Git" src="https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"/>
<img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>
<img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>


## Demo

Homepage  Mobile

![Mobile Welcome View](https://i.imgur.com/JP8ZPkX.png)

Chart/SingleStockView Mobile

![Mobile Single View](https://i.imgur.com/owVov9Y.png)

Home Desktop

![Desktop View](https://i.imgur.com/oXhrcHq.png)

Portfolio Desktop

![Desktop Portfolio](https://i.imgur.com/GkfK2pU.png)

## Deploy Link
http://n8.wtf/stonki
## Dev Installation

Either use the green "download code" button ![downloadbutton](https://imgur.com/lYy4FVP.png) at the top of the page to copy a clone link or right-click [here](https://github.com/natesheridan/Stonki.git) and click "Copy link address"

From there open your terminal and navigate to the directory you would like to store the web app inside of

Once you are in the directory execute the following command:

```bash
git clone https://github.com/natesheridan/Stonki.git
```
(this command assumes that the Github link you copied above matches.)

then navigate inside of the directory and run the following commands to run the developer server:

```bash
  cd stonki
  npm install
  npm start
```
After you have started the server you should be able to find the website visible at [this URL](http://localhost:3000)

## Challenges
API Documentation// I changed APIs 2 times for stock data. After trying two free options I gave in and paid for a well back API with easy data and endpoints to use.
Charts took a good bit of time finding a library that suited my needs and was easy and understandable to use.

Time constraints. - I focused too much on styling and a lot of features are "half-a**ed" and could use a lot of refactoring. I also only imagined this application working with a login of some sort and didn't have time to implement that in the end.

## Wins
Charts, after I got the hang of them I was blown away by how useful and easy to use Recharts actually is. I'd like to dive deeper into styling the charts in this project more.
This is one of the first apps that has a functional use cases for me over another website, and that's a big win!
## Future Features
Right now when the user adds a stock to their porfolio it is adding a default value and buy price. In the future implementing a small popup to ask the use those value will be added.
Adding backend user storage and authentication. No one wants to share their stock portfolio with the world- right now the 'user' is a dumby.js file.
