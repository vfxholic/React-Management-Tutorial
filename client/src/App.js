import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})


const customers = [
  {
  'id': 1,
  'image': 'https://picsum.photos/id/294/100/100',
  'name': '유승걸',
  'birthday': '930316',
  'gender': '남자',
  'job': '엔지니어',
  'harbby': '영화보기',
  'phonenumber': '010-4600-3438',
  'hight': '184cm'
  },
  {
    'id': 2,
    'image': 'https://picsum.photos/id/177/100/100',
    'name': '전소현',
    'birthday': '931217',
    'gender': 'male',
    'job': '간호사',
    'harbby': '요리',
    'phonenumber': '010-8633-3069',
    'hight': '162cm'
  },
  {
    'id': 3,
    'image': 'https://picsum.photos/id/166/100/100',
    'name': '유지후',
    'birthday': '230612',
    'gender': '남자',
    'job': '무직',
    'harbby': '책읽기',
    'phonenumber': '123-4567-8900',
    'hight': '50cm'
  }
]



class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
              <TableCell>취미</TableCell>
              <TableCell>H/P</TableCell>
              <TableCell>신장(cm)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              customers.map(c => {
                return (
                  <Customer
                    key={c.id}
                    id={c.id}
                    image={c.image}
                    name={c.name}
                    birthday={c.birthday}
                    gender={c.gender}
                    job={c.job}
                    harbby={c.harbby}
                    phonenumber={c.phonenumber}
                    hight={c.hight}
                  />
                )
              })
            }
          </TableBody>
        </Table>
      </Paper>
    )
  }
}



export default withStyles(styles)(App);
