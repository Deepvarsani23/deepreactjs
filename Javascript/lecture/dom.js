// Document Object Model in Javascript

// What is Document Object Model (DOM)
// The Document Object MOdel (DOM) is an application programing interface (API) for manipulating HTML document.

// The DOM represents an HTML document as a tree of nodes. The DOM provides funtion that allow you to add, remove, and modify parts of the document effectively.

// NOte that the DOM is cross-platform and language - independent way of manipulating HTML and XML document.

// A document as a hierarchy of nodes

// The DOM represents and HTML document as a hierarchy of nodes. Consider the following HTML document:

// <html>
//     <head>
//         <title>JavaScript DOM!</title>
//     </head>
//     <body>
//         <p>Hello DOM!<p>
//     </body>
// </html>

// In this DOM tree, the document is the root node. The root has one child node
// which is the <html> Element. the <html> Element is called the document Element.


// Each document can have only one document Element. In an HTML document, the document Element is the <html> element. Each markup can be represented by a node in the tree.


// Selecting elements

// getElementById() - select an element by id.
// getElementByTagNmae()  - select  element by a tag name.
// getElementByCalssName() - select  element by one or more class names.

// getElementById()

{
    // document.getElementById('para1').innerHTML = "Hello Dom !"

    // document.getElementById('box-1').innerHTML = "This is Div tag"

    // const Model = document.getElementsByClassName('box');
    // console.log(Model);

    // document.getElementsByClassName('box').innerHTML = "hello Deep"



    // const element = document.getElementsByTagName('h1');
    //     function addText() {
    //         for (let i = 0; i < element.length; i++) {
    //             element[i].innerHTML = "Hello Deep"
    //             element[i].style.color = "orange"
    //             element[i].style.background = "green"
    //             element[i].style.border = "2px solid  red"

    //         }
    //     }
    //     addText();
}

{
    // const NewElement = document.createElement("marquee");
    // NewElement.textContent = "This is Marquee Tag"
    // document.body.appendChild(NewElement)
}

// querySelector()

{
    // document.querySelector('.box').style.color = "green";
    // document.querySelectorAll('.box').style.color = "green";
}

// querySelectorAll

{
    // const element = document.querySelectorAll('#sum p');
    // console.log(element);

    // function changeColors() {
    //     for (let i = 0; i < element.length; i++) {
    //         element[i].style.color = "red";
    //     }
    // }
}

{
    // const NewElement = document.createElement("div");
    // NewElement.textContent = "This is Marquee Tag"
    // NewElement.classList="deep"
    // document.body.appendChild(NewElement)
}

//javascript has attribute

{
    // const element = document.querySelector("p");
    // function check() {
    //   if (element.hasAttribute("id")) {
    //     alert("Yes 'id' attribute exist!");
    //   }
    //   else {
    //     alert("No 'id' attribute doesn't exist!");
    //   }
    // }
}


//javascript get attribute

{    
    // const Newelement  = document.querySelector('input')
    // function check(){
    //     const AttriName = Newelement.getAttribute('value')
    //     console.log(AttriName);
    // }
}

// javascript set attribute

{
    // const element = document.getElementById("demo");

    // function checkAttr() {
    //   alert(element.hasAttribute("name"));
    // }
    // function addAttr() {
    //   element.setAttribute("type" , "text");
    // }
}

// javascript remove attribute

// {
//     const element = document.getElementById("demo");
//     function checkAttr(){
//        alert(element.hasAttribute('class'))
//     }
//     function remove() {
//       element.removeAttribute("class");
//       element.removeAttribute("name");
//       element.removeAttribute("id");
//     }
//     function addAttr(){
//        console.log(element.getAttribute("class"))
//     } 
// }


/* Html Object Accessible */

/*

document.body
document.documentElement
document.forms
document.images
document.links
document.scripts
document.title

*/

{
    // document.onload

    // function Function1(){
    //     const NewElement = document.createElement('marquee');
    //     NewElement.textContent="This Is Marquee Tag";
    //     document.body.appendChild(NewElement);

    //     document.querySelector('body').style.background = "orange   "
    // }
}

{
    // document.getElementById("demo").innerHTML = document.body.innerHTML;
}

{
    // document.getElementById("demo").innerHTML = document.documentElement.innerHTML;
}

{
//     document.getElementById('demo').innerHTML = document.anchors.length
// }
// {
//     document.getElementById("demo2").innerHTML =
// "Number of anchors are: " + document.anchors.length;


/*

Description
The anchors property is deprecated. Do NOT use it.

The anchors property only returns those <a> elements with a name attribute.

The name attribute of the <a> element is not supported in HTML5.

*/

}

{
    // document.getElementById("demo1").innerHTML = "Number of forms tag: " + document.forms.length;
}

{
    // document.getElementById("demo1").innerHTML = "Number of forms tag: " + document.head;
}

{
    // document.getElementById("demo2").innerHTML = "Number of images tag: " + document.images.length;
}

{
    // document.getElementById("demo3").innerHTML = "Number of links tag: " + document.links.length;
}

{
    // document.getElementById("demo4").innerHTML = "Number of scripts: " + document.scripts.length;
}

{
    // document.getElementById("title").innerHTML = "The title of this document is: " + document.title;
}

{
    // window.onload = () => {
    //     // create a couple of elements in an otherwise empty HTML page
    //     const heading = document.createElement("h1");
    //     const headingText = document.createTextNode("Big Head!");
    //     heading.appendChild(headingText);
    //     document.body.appendChild(heading);
    //   };
}