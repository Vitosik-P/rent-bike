import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      padding: '15px 18% 20%',
      color: '#484848',
      backgroundColor: '#f5f5f5'
    },
    rentBox: {
      padding: '16px',
      backgroundColor: '#e9eaee',
      borderRadius: '5px'
    },
    bikeBox:{
      marginTop: '8px',
      padding: '16px',
      backgroundColor: 'white',
      borderRadius: '5px'
    },
    textField: {
      width: '100%',
      padding: '8px',
      fontSize: '12px',
      boxSizing: 'border-box',
      backgroundColor: 'white',
      border: '0px',
      borderRadius: '3px'
    },
    select: {
      appearance: 'none'
    },
    selectWraper: {
      position: 'relative',
      '&::after': {
        content: "''",
        borderStyle: 'solid',
        borderWidth: '3px 4px 0 4px',
        borderColor: '#c7c7c7 transparent transparent transparent',
        position: 'absolute',
        top: '50%',
        right: '8px',
        marginTop: '-1px'
      }
    },
    numberField: {
      appearance: 'none'
    },
    button: {
      color: 'white',
      fontSize: "10px",
      textTransform: 'none',
      width: '100%',
    },
    buttonSuccess: {
      backgroundColor: '#23ba99'
    },
    mt4: {
      marginTop: '32px'
    },
  }));


export default useStyles;