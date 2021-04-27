const imgs = [
    {
        src: "https://i.pinimg.com/564x/23/65/25/2365252d6cdda3a9a2ad53a46fceca3d.jpg"
    },
    {
        src:"https://i.pinimg.com/564x/3c/d5/c0/3cd5c081b4b2abca10d23b89bc1ded0e.jpg"
    },
    {
        src:"https://i.pinimg.com/564x/79/4e/12/794e12ea1a738e22a5c43091d9c37ce8.jpg"
    },
    {
        src:"https://i.pinimg.com/564x/9a/cc/ed/9acced11fd965b926b045e30210a2a1e.jpg"
    },
    {
        src:"https://i.pinimg.com/236x/bf/34/22/bf3422ecfd52f210a1e9e4949b155347.jpg"
    },
    {
        src:"https://i.pinimg.com/564x/1d/ff/c1/1dffc17b2a637093b09f3d64ca7ec6f9.jpg"
    },
    {
        src:"https://i.pinimg.com/564x/0e/92/d5/0e92d5bdcfa1998bc693cef2ed9455e8.jpg"
    },
    {
        src:"https://i.pinimg.com/564x/8b/cb/33/8bcb3321d6b65a2e9b46edde145daa4e.jpg"
    },
    {
        src:"https://i.pinimg.com/564x/62/6b/70/626b7009228c4b9336786d93b10d3d11.jpg"
    },
    {
        src:"https://i.pinimg.com/564x/9f/b5/99/9fb5992347844f24dae42684353781d1.jpg"
    },

]

export const Images = ()=>{
    return(
        <div className = "Post__images">
           <div className="images__plate">
               {imgs.map(imeg=>{
                return(
                <div className = "image"><img src = {imeg.src} /></div>
                )          
            })}</div> 
        </div>
    )
}