import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import WorkIcon from "@material-ui/icons/Work";
import PersonIcon from "@material-ui/icons/Person";
import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as WalletLogo } from './../icons/wallet-pass.svg';

const useStyles = makeStyles({});

export default function CarSelectionItem({ optionItem, isSelected }) {
  const classes = useStyles();
  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container>
          <Grid container direction="row" xs={6} alignItems="flex-start" style={{margin: 'auto'}}>
            <div style={{padding: '15px'}}>
            <Grid item xs={12} style={{paddingBottom: '100px'}}>
                <Typography variant="h4" color="textPrimary" align="left">
                  {optionItem.type}
                </Typography>
                <Typography variant="h6" color="textSecondary" align="left">
                  {optionItem.description.en}
                </Typography>
              </Grid>
              <Grid container direction="row" alignItems="center">
                <Grid item xs={6}>
                  <Typography variant="h6" color="primary" align="center">
                    <WorkIcon color="primary" />
                    {optionItem.maxLuggage}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6" color="primary" align="center">
                    <PersonIcon color="primary" />
                    {optionItem.maxPassengers}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} style={{padding: '12px'}}>
                <Typography variant="h6" color="textSecondary" align="center">
                  <SvgIcon style={{position: 'relative', top: '6px'}}>
                    <WalletLogo></WalletLogo>
                  </SvgIcon>
                  {optionItem.price} EGP
                </Typography>
              </Grid>
              </div>
          </Grid>
            
              

          <Grid item xs={6}>
            <img src={optionItem.imgURL} alt={optionItem.type}></img>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
