//crear clase Biblioteca con propiedades

class Biblioteca {
    constructor(nombre) {
        this.nombre = nombre;
        this.libros = [];
    }
    agregarLibro() {
        this.libros.push(Libro);
    }
    buscarPorISBN() {

    }
    
};
//metodos 
//agregar, buscar por isbn, prestar, devolver, mostrar libros









//crear clase libro con propiedades()

class Libro {
    constructor(nombre, libros, titulo, autor, isbn, _prestado) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this._prestado = false;
    }


    prestar() {
        if (this._prestado) {
            return `El libro "${this.titulo}" ya esta prestado.`;

        } 
        this._prestado = true;
        return `Has cogido el libro "${this.titulo}".`;
    }
    devolver() {
        if (this._prestado) {
            return `tenemos el libro "${this.titulo}".`;
        }
        this._prestado = false;
        return `Has devuelto "${this.titulo}".`;
    }
    getEstado() {
        return this._prestado ? "Prestado" : "Disponible";
    }
};

const libroPri = new Libro("Primer libro", "Primer autor", "001");//agregar libro1
const libroSeg = new Libro("Segundo libro", "Segundo autor", "002");//agregar libro2
const libroTer = new Libro("Tercer libro", "Tercer autor", "003");//agregar libro 3



console.log(libroPri.getEstado());
console.log(libroSeg.getEstado());
console.log(libroTer.getEstado());
console.log(libroPri.prestar());
console.log(libroPri.getEstado());
console.log(libroPri.prestar());
const miBiblioteca = new Biblioteca("Biblio");

miBiblioteca.agregarLibro(libroPri);
miBiblioteca.agregarLibro(libroSeg);
miBiblioteca.agregarLibro(libroTer);
console.log(miBiblioteca);

console.log(libroPri.getEstado());
console.log


//metodos
// prestar, devolver, getEstado



