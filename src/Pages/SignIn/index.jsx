import React, { useState } from 'react';
import { Link as RLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './styles.js'
import axios from 'axios';
import openNotification from '../../Components/notification'

export default function SignIn() {
  const classes = useStyles();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [ifChecked, setIfChecked] = useState(false)
  // 提交注册信息
  const handleSignin = (data) => {
    console.log(data)
    axios.post('http://localhost:3000/signin', {
      createUserName: data.createUserName,
      createPassword: data.createPassword
    }).then((response) => {
      if (response.data === "成功") {
        openNotification(1)
      }
      else {
        openNotification(false)
      }
    })
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          注册
        </Typography>
        <form
          onSubmit={handleSubmit(handleSignin)}
          className={classes.form}
          noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                {...register("createUserName",
                  {
                    required: "输入新的用户名",
                    minLength: { value: 5, message: "用户名至少5位" },
                    maxLength: { value: 12, message: "用户名最大为12个字符" }
                  })}
                helperText={errors.createUserName?.message}
                variant="outlined"
                fullWidth
                label="输入新的用户名"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("createPassword", {
                  required: "请输入新的密码",
                  minLength: { value: 5, message: "密码最小为5位" },
                  maxLength: { value: 8, message: "密码最多为8位" }
                })}
                helperText={errors.createPassword?.message}
                variant="outlined"
                fullWidth
                label="请输入新的密码"
                type="password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox
                  value="allowExtraEmails"
                  color="primary" />}
                label="我已阅读网站规定等相关文档."
                onChange={() => setIfChecked(!ifChecked)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!ifChecked}
          >
            注册
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link component={RLink} to='/login' >
                已有账号？返回登陆页面
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'PoweredBy © '}
      <Link color="inherit" href="https://mui.com/">
        React后台管理系统
      </Link>&nbsp
      {new Date().getFullYear()}
      &nbsp
    </Typography>
  );
}