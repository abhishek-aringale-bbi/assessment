
// for (let key in vari){
//     console.log(vari[key])   //0
//     console.log(vari[key].type1) //div
//     console.log(typeof vari[key].type1) //string
//     let di;
//     console.log("sw")
//     if(typeof vari[key].type1==String)
//     {
//         di=document.createElement("div")
//         console.log("xx")
//         di.innertext="This is "
//         document.body.appendChild(di);
//     }
// }

// function rec(vari){
//     for (let k in vari)
//     {
//         console.log(k)
//         for(let key in vari[k])
//         {
//             // if(typeof vari[k]==)
//             console.log(vari[k][key])
//             console.log(typeof key)  
//             if(typeof key == array)
//             {
//                 console.log("D")
//                 rec(key);
//             }
//             else{
//                 let di=document.createElement(vari[k][key])
//             }
//         }
//     }
// }

// rec(vari);

const vari = [
    {
      type: "div",
      children: [
        { type: "h1", children: [{ type: "p", text: "abtc" }] },
        {
          type: "ul",
          children: [
            { type: "li", text: "item 1" },
            { type: "li", text: "item 2" },
          ],
        },
      ],
    },
  ];
// console.log(vari[0].type)

function createElement(type) {
    return document.createElement(type);
}


function recursion(vari, div) {

    // if (flag == 0) {
    //     const x = document.createElement(obj.type);
    //     x.innerHTML="this is div";
    //     document.body.appendChild(x);
    //     console.log(x)

    // }
    // else {
    //     const z=document.createElement(obj.type);
    //     temp.appendChild(z)
    // }
    // const z=document.createElement(obj.type);
    // temp.appendChild(z)

    // if (Array.isArray(obj.children) === true) {
    //     obj.children.forEach(element => { 
    //         // flag=1;                     //element is objects in children
    //         const temparary=document.getElementById(obj.type);
    //         recursion(element,temparary)
    //     });
    // }
    // else {
    //     html += `${obj.type}`;
    //     console.log(html);
    // }

    for (const obj of vari) {
        const ele = createElement(obj.type);

        div.appendChild(ele);
        if(obj.text)
        {
            ele.textContent = obj.text;
        }

        if (obj.children) {
            recursion(obj.children, ele);
        }
    }
}

const div=document.getElementById("div");

recursion(vari, div);

