import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* v2.0 | 20110126
  http://meyerweb.com/eric/tools/css/reset/ 
  License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	/* font: inherit; */
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a{
	text-decoration: none;
}

/* custom */

.categoryTitle{
	text-align: center;
	font-size : 30px;
	font-weight: normal;
	margin-bottom: 24px;
	
	 
}

button{
	background-color : navy;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    cursor: pointer;
    //padding: 12px 0px;
}

.container{
	padding-top: 100px;
	max-width: 1280px;
	margin: 0px auto;

}
.productList{
	display: flex;
	gap :36px 5%; 
	flex-wrap: wrap;
}

.productList > li{
	 flex-shrink : 0;
	 flex-basis: 30%;
}
.productList > li img{
	width: 100%;
	display: block;
}

.textWrap{
	margin-top: 24px;
}
.textWrap .itemTitle{
	font-weight: normal;
	font-size: 16px;
	margin-bottom: 12px;
}
.textWrap .itemFlex{
	display: flex;
	justify-content: space-between;
}

.textWrap .itemFlex p{
	font-size: 14px;
}

/* detailPage */
.detailPage{
	max-width: 768px;
	display: flex;
	gap: 68px;
	margin : 0px auto;
	
	.detailImg{
		max-width: 400px;
		img{
			width: 100%;
			display: block;
		}
	}

	.detailText{
		max-width: 600px;
		width: 600px;
		display: flex;
		flex-direction: column;
		gap: 16px;

		h2{
			font-size: 24px;
			width: 100%;
			border-bottom: solid 1px #dddddd;
			padding-bottom: 16px;
			
		}

		p{
			width: 100%;
			padding-bottom: 16px;
			border-bottom : solid 1px #dddddd;
			color : gray;

		}

		.cartBtn, .buyBtn{
			width: 100px;
			padding: 5px;
		}

		.price{
			padding-left: 100px;
		}

		 

 
	}
 
	 
	
}

// cart 장바구니
.cartList{
	display: flex;
	flex-direction: column;
	gap: 16px;
	border-top: solid 1px #dddddd;
	padding: 24px 0px;
	li{
		display: flex;
		align-items: center;
		border-bottom: solid 1px #dddddd;
		padding: 12px 0px;
		gap: 12px;

		img{
			width: 100px;
			display: block;
		}
	}

}


 




`

export default GlobalStyle;