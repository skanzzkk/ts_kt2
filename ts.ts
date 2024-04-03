abstract class Publisher {
    protected title: string;
    protected author: string;
    protected pubYear: number;
    protected copies: number;
  
    constructor(title: string, author: string, pubYear: number, copies: number) {
      this.title = title;
      this.author = author;
      this.pubYear = pubYear;
      this.copies = copies;
    }
  
    getTitle(): string {
      return this.title;
    }
  
    setTitle(title: string): void {
      this.title = title;
    }
  
    getAuthor(): string {
      return this.author;
    }
  
    setAuthor(author: string): void {
      this.author = author;
    }
  
    getPubYear(): number {
      return this.pubYear;
    }
  
    setPubYear(pubYear: number): void {
      this.pubYear = pubYear;
    }
  
    getCopies(): number {
      return this.copies;
    }
  
    setCopies(copies: number): void {
      this.copies = copies;
    }
  }
  
  class Book extends Publisher {
    private pages: number;
  
    constructor(title: string, author: string, pubYear: number, copies: number, pages: number) {
      super(title, author, pubYear, copies);
      this.pages = pages;
    }
  
    getPages(): number {
      return this.pages;
    }
  
    setPages(pages: number): void {
      this.pages = pages;
    }
  }
  
  class Magazine extends Publisher {
    private issue: number;
  
    constructor(title: string, author: string, pubYear: number, copies: number, issue: number) {
      super(title, author, pubYear, copies);
      this.issue = issue;
    }
  
    getIssue(): number {
      return this.issue;
    }
  
    setIssue(issue: number): void {
      this.issue = issue;
    }
  }
  
  interface Reception {
    delivery(publication: Publisher): void;
    receive(publication: Publisher): void;
  }
  
  class Reader {
    private firstName: string;
    private lastName: string;
    private items: Publisher[];
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.items = [];
    }
  
    getFirstName(): string {
      return this.firstName;
    }
  
    setFirstName(firstName: string): void {
      this.firstName = firstName;
    }
  
    getLastName(): string {
      return this.lastName;
    }
  
    setLastName(lastName: string): void {
      this.lastName = lastName;
    }
  
    getItems(): Publisher[] {
      return this.items;
    }
  
    addItem(item: Publisher): void {
      if (this.items.length < 3) {
        this.items.push(item);
        console.log(`Выдано издание: ${item.getTitle()}`);
      } else {
        console.log(`У вас уже есть максимальное количество изданий.`);
      }
    }
  
    returnItem(item: Publisher): void {
      const index = this.items.indexOf(item);
      if (index !== -1) {
        this.items.splice(index, 1);
        console.log(`Издание ${item.getTitle()} возвращено.`);
      } else {
        console.log(`У вас нет такого издания.`);
      }
    }
  }
  
  class Library {
    private publications: Publisher[];
  
    constructor() {
      this.publications = [];
    }
  
    addPublication(publication: Publisher): void {
      this.publications.push(publication);
      console.log(`Издание ${publication.getTitle()} добавлено в библиотеку.`);
    }
  
    removePublication(publication: Publisher): void {
      const index = this.publications.indexOf(publication);
      if (index !== -1) {
        this.publications.splice(index, 1);
        console.log(`Издание ${publication.getTitle()} удалено из библиотеки.`);
      } else {
        console.log(`Издание не найдено в библиотеке.`);
      }
    }
  }
  
 
  const book1 = new Book("Название книги", "Автор книги", 2022, 5, 300);
  const magazine1 = new Magazine("Название журнала", "Автор журнала", 2023, 10, 15);
  

  const reader1 = new Reader("Имя читателя", "Фамилия читателя");
  

  const library = new Library();
  
  
  library.addPublication(book1);
  library.addPublication(magazine1);
  
 
  reader1.addItem(book1);
  reader1.addItem(magazine1);
  

  reader1.returnItem(book1);
  reader1.returnItem(magazine1);
  

  library.removePublication(book1);
  library.removePublication(magazine1);
  