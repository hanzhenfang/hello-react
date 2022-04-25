import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                color="secondary"
                onClick={handleClickOpen}
            >
                <span style={{ color: "white" }}>
                    {props.children}
                </span>
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"确定要退出吗?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        退出可能会导致你现在的一些信息丢失。
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button {...props} color="primary">
                        确定
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        我再想想
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
