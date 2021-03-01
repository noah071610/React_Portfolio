import { createGlobalStyle } from "styled-components";
import { BG_COLOR, SUB_COLOR } from "./config";

export const lightTheme = {
  bodyColor: "white",
  pageColor: BG_COLOR,
  pageColorReverse: "#3d3e41",
  fontColor: "black",
  fontColorReverse: "white",
  diverColor: "rgba(0,0,0,0.1)",
  dateColor: "rgba(0,0,0,0.3)",
};

export const darkTheme = {
  bodyColor: "#252525",
  pageColor: "#3d3e41",
  pageColorReverse: BG_COLOR,
  fontColor: "white",
  fontColorReverse: "black",
  diverColor: "white",
  dateColor: "white",
};

export const GlobalStyles = createGlobalStyle`
body{
  background-color: ${(props) => props.theme.bodyColor};
  color:${(props) => props.theme.fontColor};
  .pageWrapper{
    background-color: ${(props) => props.theme.pageColor};
    border: ${(props) => (props.theme === "light" ? null : "1px solid rgba(255,255,255,0.1)")};
  }
  .articles{
    background-color: ${(props) => props.theme.pageColor};
  }
  h1,h2,h3,.writer_name, .skill_box_title, span , a , .edit_form, .date{
    color:${(props) => props.theme.fontColor};
  }
  .divider{
    background-color:${(props) => props.theme.diverColor};
  }

  .nav_sticky {
    width: 100%;
    height: 3.125rem;
    position: fixed;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    top: 0;
    z-index: 1;
    transition: 0.5s;
    background-color: ${(props) => props.theme.pageColor};
  }
  .BlogCardWrapper {
  }
  .scroll{
    color:${(props) => props.theme.dateColor};
  }
  .post_form {
    background-color: ${(props) => props.theme.pageColor};
    color:black;
  }
  .ant-message-notice-content{
    background-color: ${(props) => props.theme.pageColor};
  }
  .ant-table-tbody{
    background-color: ${(props) => props.theme.pageColor};
    color:${(props) => props.theme.fontColor};
    .ant-table-row, .ant-table-row-level-0 {
      &:hover{
        color: black;
      }
    }
  }
  .paginateBtn{
    transition: all 0.3s;
    color:${(props) => props.theme.fontColor};
    &:hover {
      color:${(props) => props.theme.fontColor};
      opacity: 0.5;
      box-shadow: 4px 5px 10px 1px rgba(0, 0, 0, 0.2);
    }
  }
}

.ant-row {
  margin-right: 0 !important;
  margin-left: 0 !important;
}

p{
  margin:0.5rem auto;
}
h1,
h2,
h3 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}
h2{
  font-size:1.1rem;
}



.ant-input {
  background-color: ${(props) => props.theme.pageColor} !important;
  color:${(props) => props.theme.fontColor};
}

.ant-input-wrapper   {
& .ant-input:focus {
  border: 1px solid ${SUB_COLOR} !important;
box-shadow: none;
}
& .ant-input:hover {
  border: 1px solid ${SUB_COLOR} !important;
box-shadow: none;
}
}

.ant-input-affix-wrapper   {
&:focus {
  border: 1px solid ${SUB_COLOR} !important;
box-shadow: none;
}
&:hover {
  border: 1px solid ${SUB_COLOR} !important;
box-shadow: none;
}
}

.ant-input-affix-wrapper-focused {
border: 1px solid ${SUB_COLOR} !important;
box-shadow: none;
}


.ant-input-group-addon  {
button:focus{
  border: 1px solid ${SUB_COLOR} !important;
box-shadow: none;
}
button:hover{
  border: 1px solid ${SUB_COLOR} !important;
box-shadow: none;
}

}
.ant-pagination-item-link{
  color:${(props) => props.theme.fontColor}!important;
  background-color: ${(props) => props.theme.pageColor} !important;
&:hover{
  color:${SUB_COLOR};
  border: 1px solid ${SUB_COLOR} !important;
  span{
    color:${SUB_COLOR};
  }
}
}

.ant-pagination-item{
  color:${(props) => props.theme.fontColor}!important;
  background-color: ${(props) => props.theme.pageColor} !important;
&:hover{
  color:${SUB_COLOR};
  border: 1px solid ${SUB_COLOR} !important;
}
&:focus{
  color:${SUB_COLOR};
  border: 1px solid ${SUB_COLOR} !important;
}
a:hover {
  color:${SUB_COLOR};
}
}

.ant-pagination-item-active {
  color:${(props) => props.theme.fontColor}!important;
  background-color: ${(props) => props.theme.pageColor} !important;
border: 1px solid ${SUB_COLOR} !important;
a{
  color: ${SUB_COLOR} !important;
}
}

.ant-btn {
  background-color: ${(props) => props.theme.pageColor} !important;
&:hover{
  color:${SUB_COLOR};
  border: 1px solid ${SUB_COLOR} !important;
}
&:focus{
  color:${SUB_COLOR};
  border: 1px solid ${SUB_COLOR} !important;
}
}
  
.ant-input-search-button{
  background-color: ${(props) => props.theme.pageColor} !important;
  span {color:${(props) => props.theme.fontColor};}
}
`;
