import React from 'react';
import { useRef } from 'react';
import { notification } from 'antd';
import axios from 'axios';
import { Link as ReactLink, useNavigate as navigate } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SignIn from '../SignIn';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'PoweredBy © '}
            <Link color="inherit" href="https://mui.com/">      {/*页脚相关内容*/}
                小方xxx待定平台
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function debounce(fn, delay) { //设置防抖方法来防止用户疯狂点击登陆
    let timerID = false
    return function () {
        if (timerID) {
            clearTimeout(timerID);
        }
        timerID = setTimeout(() => {
            fn();
        }, delay)
    }
}

export default function Login(props) {
    const classes = useStyles();
    const userName = useRef()
    const passWord = useRef()
    const submit = () => {
        console.log(userName.current.value)
        //可以有一个timeout参数来设置请求时间，如果超时修改promise的状态为reject
        axios.get('http://localhost:5500/server', { timeout: 3000 }).then(
            (response) => {
                console.log(response)
                const user = response.data.login
                if (userName.current.value === user.username
                    && passWord.current.value === user.password) {
                    notification['success']({
                        message: "登陆成功",
                        description: "如果喜欢该网页就推荐给你的朋友们吧～❤️",
                        duration: 1
                    });
                    setTimeout(() => { props.setIfLogin(true) }, 2000)

                }
                else {
                    notification['error']({
                        message: "登陆失败",
                        description: "请核对用户名信息和密码是否正确"
                    });
                    return new Promise(() => { })   //当密码错误的时候，返回一个空promise来中断后续.then方法的执行
                }
            },
            (reason) => {
                notification['error']({
                    message: "请求超时",
                    description: "服务器开小差了"
                })
            }

        ).then((a) => {
            console.log(a)
        })
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h3">
                    登陆页面
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        inputRef={userName}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="用户名"
                        name="username"
                        autoFocus
                    />
                    <TextField
                        inputRef={passWord}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="记住账号密码"
                    />
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={debounce(submit, 1500)}
                    >
                        登陆
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                忘记密码？
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="../SignIn/index.jsx" variant="body2">
                                没有账号？点击注册
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}