## Description

_Duration: 5 hours_

This weekend challenge allows you to like an image, click on the image to show its description, and create a new image.

## Problems I ran into

I initially approached this assignment incorrectly by moving the data.js file into the src folder since I wanted to import it.

The main obstacle was figuring out how to pass props through components, then manipulating the data within the component to do whatever you wanted.

I asked for help from Stephon Maria Isabel, and Miley to help me complete the assignment.

## Installation

1. There is no database component to base mode. All data is stored in an array on the server. Before you get started, add a few images to the `public/images` folder and modify the `server/modules/data.js` to include an `id`, `title`, `description` and `path for` each of your images. Each `id` should be a unique number (e.g. 1, 2, 3...).

2. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed for the stretch goals. We recommend using Postico to run those queries as that was used to create the queries

3. Running the server code requires `nodemon`. If you don't already have `nodemon`, install it globally with `npm install nodemon --global`.

4. Run an `npm install`
5. Run `npm run server` (terminal one)
6. Open a new terminal, run `npm run client` (terminal two)
7. The `npm run client` command will open up a new browser tab for you!

## Usage

1. This application allows you to share pictures of things that are important to you.

2. Visitors can click on an image to see a description and use a button to "like" an image.

3. Visitors can click on an image to see a description!

## Built With

List technologies and frameworks here:
**React**
**Axios**
**Node**

## Acknowledgement

Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. (Thank your people)

## Support

If you have suggestions or issues, please email me at [averyyang2674@gmail.com]
