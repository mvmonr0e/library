# Library

Library created with HTML, Bootstrap, and JS. <br>
[Live Here](https://mvmonr0e.github.io/library/)


## Possible future improvments

### This solution is very innefficient. 
- The HTML table is loaded from scratch at every create, update, and delete. If implemented at scale (highly unlikely because this is a practice project), load time increase linearly with the size of the data. 

### Object IDs should never been stored client side. 
- A database and auth could be used to hide these primary keys.

### The UI is also kinda ugly lol.