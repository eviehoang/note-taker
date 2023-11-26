<div align="center">
  
  ![](public/assets/images/11-express-homework-demo.gif)

  <h3 align="center">Note Taker</h3>

  <p align="center">
A simple Express.js application for managing and retrieving notes. It includes HTML routes for the main page and a notes page. API routes handle reading, creating, and deleting notes from a JSON file (db.json). The code uses the uuid library to generate unique IDs for new notes. However, there was a missing update to the in-memory db variable after deleting a note, potentially causing deleted notes to persist in subsequent requests. The modification ensures that the in-memory db variable is updated after deleting a note, resolving the issue.
  </p>

</div>


### Built With

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![EXPRESS](https://img.shields.io/badge/EXPRESS-blue?style=for-the-badge)



<!-- GETTING STARTED -->
## Getting Started

Install the following to play with the program

### Prerequisites
1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install <i>dependencies</i>.
  ```sh
  npm install
  ```

3. Run.
  ```sh
  node server.js
  ```

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->
## Contact

Nhi Hoang - [linkedin](https://www.linkedin.com/in/ynhihoang/)
Project Repo: [https://github.com/eviehoang/tech-blog](https://github.com/eviehoang/note-taker/)
Heroku: [Heroku](https://evie-note-taker-071f3e8ace6d.herokuapp.com/)


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Ileriaya Markdown-badges](https://github.com/Ileriayo/markdown-badges)
* [GitHub Pages](https://pages.github.com)
* [W3School](https://w3schools.com/graphics/svg_rect.asp) for tutorial codes and educational references.
* [MDN](https://developer.mozilla.org/en-US/) for example codes and educational references.
* [Source Code provided by BCS Team](https://github.com/coding-boot-camp/fantastic-umbrella)
