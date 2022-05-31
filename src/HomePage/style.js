import styled from 'styled-components'

export const Container=styled.div`
display: flex;
flex-direction: column;
background-color: #F9F7F4;

`
export const Navbar=styled.div`
background-color: #F9F7F4;
display: flex;
align-items: center;

justify-content: center;
height: 100px;
position: sticky;
    top: 0;


`
Navbar.Left=styled.div`
flex: 1;
align-items: center;
justify-content: center;
padding-left: 120px;

`
Navbar.Right=styled.div`
flex: 2;
display: flex;
align-items: center;
justify-content: center;
justify-content: space-evenly;
#home{
    border: none;
    background-color: rgba(101, 114, 123, 0.2);
    border-radius: 40px;
    width: 85px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;

}
#home:hover{
    background-color:#F9F7F4;
}

`

export const Wrapper=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 30px;
padding-top: 100px;
h2{
    font-family: "DM Serif Display";
font-size: 48px;
font-weight: 400;
line-height: 56px;
letter-spacing: 0em;
text-align: center;


}
p{
 font-family: "Source Sans Pro";
font-size: 21px;
font-weight: 400;
line-height: 32px;
letter-spacing: 0em;
text-align: center;


}


`
Wrapper.Buttons=styled.div`
display: flex;
border: none;
align-items: center;
/* justify-content: space-evenly; */
gap: 20px;

`
export const WrapperButtons=styled.div`
border: 1px solid black;
display: flex;
align-items: center;
justify-content: space-evenly;
width: 156px;
height: 56px;
background-color:#28514F;
border-radius: 50px;
box-shadow: 0 0 5px #000;
p{
    color: white;

}
#btn3{
    background-color: #AEB4B6;;
}


`
export const AppleLogo=styled.img`

`
export const PLaymarketLogo=styled.img`

`
export const Phone=styled.img`
width: 700px;
height: 900px;
padding-right: 80px;
`

export const Child=styled.div`
display: flex;
align-items: center;
flex-direction: column;
gap: 20px;
h2{
    font-family: DM Serif Display;
font-size: 48px;
font-weight: 400;
line-height: 56px;
letter-spacing: 0em;
text-align: center;


}
p{
    font-family: Source Sans Pro;
font-size: 21px;
font-weight: 400;
line-height: 32px;
letter-spacing: 0em;
text-align: center;


}

`
Child.Img=styled.div`
display:grid;
grid-template-areas: 'a a';
border:none;
padding: 50px;
gap: 10px;

`
export const FourPics1=styled.img`
padding-top: 115px;


`
export const FourPics=styled.img`



`
export const Bottom=styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 600px;
gap: 20px;
h2{
    font-family: DM Serif Display;
font-size: 47px;
font-weight: 400;
line-height: 56px;
letter-spacing: 0em;
text-align: center;


}
p{
    font-family: Source Sans Pro;
font-size: 20px;
font-weight: 400;
line-height: 32px;
letter-spacing: 0em;
text-align: center;


}

`
export const Rate=styled.div`
display: flex;
align-items: center;
/* justify-content: center; */
gap: 30px;
justify-content: space-evenly;


`
Rate.Inner=styled.div`
/* display: flex; */
flex-direction: column;
border: 1px solid black;
background-color: #FFFFFF;
/* border: 1px solid black; */
border-radius: 20px;
width: 350px;
height: 250px;
padding-left: 10px;
p{
    text-align: left;
}
`
export const RateImg=styled.img`
width: 100px;
`
export const AppleGreen=styled.img`
`

export const GreenBox=styled.div`
border: none;
display: flex;
align-items: center;
/* justify-content: center; */
gap: 10px;
`
export const Family=styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 40px;
background-color: #28514F;
h2{
    color: white;

}
p{
    color: white;
}
`
export const Thumb=styled.div`
/* border: 1px solid black;
display: flex;
margin-bottom: 200px; */
`
export const ThumbImg=styled.img`
`
export const FamilyButton=styled.div`
button{
 border: 1px solid black;
display: flex;
align-items: center;
justify-content: space-evenly;
width: 200px;
height: 50px;
background-color:white;
border-radius: 50px;
/* box-shadow: 0 0 5px #000; */
color: #28514F;
cursor: pointer;

}
button:hover{
  background-color: black;
  transform: scale(1.01);
  transition: all 0.1 ease;
 box-shadow: 0 0 5px #000;
 color: white;
}
`
export const Nature=styled.img`
`
export const Join=styled.div`
padding: 30px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 30px;

`
Join.Upper=styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 950px;
height: 350px;

background: #F8E6BE;
`
Join.UpperLeft=styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 40px;
flex: 1;
`
Join.UpperRight=styled.div`
flex: 1;

`
export const JoinImg=styled.img`
`
Join.Lower=styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 30px;
`
export const Mail=styled.div`
display: flex;
align-items: center;
justify-content: center;
input{
    border: 1px solid black;
    width: 250px;
    height: 50px;
    border-radius: 40px 0px 0px 40px;
    padding-left: 30px;
    font-size: 14px;

}
button{
    border: 1px solid black;
    width: 100px;
    height: 50px;
    background: #28514F;
/* box-shadow: 0px 4px 0px rgba(167, 167, 167, 0.16); */
border-radius: 0px 40px 40px 0px;
color: white;
cursor: pointer;
}
`
export const Footer=styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 40px;
`
Footer.Left=styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
flex: 1;
gap: 20px;
`
Footer.Middle=styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
gap: 20px;
`
Footer.Right=styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
gap: 20px;
`

Footer.LeftUpper1=styled.div`
display: flex;
justify-content: center;
align-items: center;
justify-content: space-evenly;
gap: 40px;
`
Footer.LeftUpper2=styled.div`
display: flex;
justify-content: center;
align-items: center;
justify-content: space-evenly;
gap: 40px;
`




