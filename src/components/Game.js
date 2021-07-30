import React from 'react';
//Styling and Animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
//Redux
import {useDispatch} from 'react-redux';
import {loadDetail} from '../actions/detailAction'; 
import {Link} from 'react-router-dom';
import {smallImage} from '../util'
import {popup} from '../animations';

function Game({name, released, image, id}){
  const stringId = id.toString()
    //Load Detail
    const dispatch = useDispatch();
    function loadDetailHandler(){
      document.body.style.overflow = "hidden"; //hide the Game page scroll function when click game detail
            dispatch(loadDetail(id))  
    }
    return(
        <StyledGame layoutId={stringId} onClick={loadDetailHandler}  variants={popup} initial="hidden" animate="show">
          <Link to={`/game/${id}`}>
            <motion.h3 layoutId={`title ${stringId}`}>{name}</motion.h3>
            <p>{released}</p>
            <motion.img layoutId={`image ${stringId}`} src={smallImage(image,640)} alt={name} />
          </Link>
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game