// import { css } from 'glamor';
import styled from '@emotion/styled'
import colorVariables from './constants/styles-variables'
const { darkGrey } = colorVariables

export const StyledApp = styled.div({
  fontSize: '2rem',
})

export const TopBarWrapper = styled.div({
  position: 'fixed',
  display: 'flex',
  width: '100%',
  height: '10rem',
  zIndex: '2',
  backgroundColor: '#000',
})

export const LogoWrapper = styled.span({
  width: '5rem',
  height: '5rem',
  alignSelf: 'center',
  margin: '2rem',
})

export const MenuWrapper = styled.ul({
  display: 'flex',
  flexGrow: '1',
  alignItems: 'center',
})

export const MenuItem = styled.li({
  padding: '0 2rem 0 0',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '1.75rem',
  textTransform: 'uppercase',
})

export const RecentTrackWrapper = styled.div({
  width: '30rem',
  margin: '0 auto',
  padding: '10rem 0 0 0',

  '@media screen and (min-width:1024px)': {
    width: '60rem',
  },
})

export const RecentTrackLink = styled.a({
  display: 'block',
  marginBottom: '2.5rem',

  ':link, :visited': {
    color: darkGrey,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },

  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    transition: 'background-color .25s ease-in-out',
  },

  '@media screen and (min-width:1024px)': {
    display: 'inline-flex',
  },
})

export const RecentTrackImage = styled.img({
  minWidth: '300px',
  minHeight: '300px',
})

export const RecentTrackInfoList = styled.ul({
  padding: '.75rem 1rem',
  width: '300px',
  lineHeight: '1.5',
})

export const RecentTrackDate = styled.li({
  fontSize: '80%',
})

export const TopArtistsWrapper = styled.section({
  maxWidth: '1500px',
  margin: '0 auto',
  padding: '10rem 0 0',
  textAlign: 'center',
})

export const TopArtistWrapper = styled.a({
  display: 'inline-flex',
  position: 'relative',
  width: '300px',
  margin: '0 2rem 2rem 0',
})

export const TopArtistInfoWrapper = styled.div({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  color: 'white',
  backgroundColor: 'rgba(255, 255, 255, .5)',

  // &:hover {
  //   background-color: rgba(0, 0, 0, 0);
  //   & > div {
  //     color: ${darkGrey};
  //   }
  // }
})

export const TopArtistInfo = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  flexGrow: '1',
})

export const UserWrapper = styled.div({
  position: 'fixed',
  top: '9.5rem',
  right: '0',
})

export const LinkUserWrapper = styled.li({
  display: 'flex',
  flexGrow: '1',
  flexDirection: 'row-reverse',
  padding: '0 2rem 0 0',
})

export const UserInfo = styled.ul({
  margin: '0 auto',
  padding: '1rem 0.7rem 0.7rem 0',
  textAlign: 'right',
  color: darkGrey,
})

export const UserLink = styled.a({
  display: 'inline-block',
  margin: '5px auto',
  backgroundColor: 'rgba(255, 255, 255, 1)',
})
