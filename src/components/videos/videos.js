import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Iframe from 'react-iframe';

class ResponsiveDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }


    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

  render() {
    const { fullScreen } = this.props;

    return (
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
              <Iframe url="https://www.useloom.com/embed/c941237efe5544a0ade0d45596ced1ac"
                width="800px"
                height="300px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                allowFullScreen/>

        </Dialog>
      </div>
    );
  }
}


ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(ResponsiveDialog);
