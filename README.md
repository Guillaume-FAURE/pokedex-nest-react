# Pokedex

This is a Pokedex built with react and nest.
This pokedex cover the 8 first generation until Sword-Shield.

## Launch Back-End Server

To launch the back-end server, go to the backend part and start with npm :

```npm
cd pokedex-backend && npm run start && cd ..
```

### View JSON information on Web Browser

To view the different info, go to your browser and go to the address 'localhost:5000'<br>
There is 5 differents information we can access:

-   /pokemon/:id : It permit to access the basic information of the pokemon of {id}.
-   /species/:id : It permit to access the advanced information of the species of the pokemon of {id}.
-   /location-area-encounter/:id : It permit to access to the possible location where we can encounter the pokemon of {id}.
-   /evolution-chain/:id : It permit to access to evolution-chain of {id}, we can know the {id} for the pokemon of id {n} in the address /species/:n.
-   /moves/:id : It permit to access the move of {id}.

## Launch Front-End Server

To launch the back-end server, go to the frontend part and start with npm, the Back-End Server need to be launch before the frontend :

```npm
cd pokedex-frontend && npm run start && cd ..
```

### View the app

Normally, npm run start will open the page 'localhost:3000' in your favorite Web Browser.
In your web browser, you can access to the app on the port 3000 and to the specific page of the pokemon of id {n} in page 'localhost:3000/pokemon/n'.
You can click on every Pokemon to open a new Page with advanced data.
