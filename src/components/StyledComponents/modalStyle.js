const Container = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
    background-color:rgba(249,249,249,0.85);
    z-index:100;
`
const RatingBox = styled.div`
  margin: 0 auto;

  & svg {
    color: #C4C4C4;
    cursor: pointer;
  }
  :hover svg {
    color: black;
  }
  & svg:hover ~ svg {
    color: #C4C4C4;
  }
  .black {
    color: black;
  }
`