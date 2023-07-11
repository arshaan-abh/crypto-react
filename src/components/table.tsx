import * as React from 'react'
import {styled} from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, {tableCellClasses} from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import icon from '../assets/battery.svg'
import bitcoin from '../assets/bitcoin.svg'

const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#ccccff10",
        color: "#ccccff80"
    },
    '&': {
        fontSize: "1rem",
        fontWeight: "500",
        borderBottom: "3px solid #ccccff20",
        color: "white",
        fontFamily: "'Noto Sans', sans-serif"
    },
    '& img': {
        verticalAlign: "middle",
        height: "1.5rem",
        marginRight: ".5rem"
    },
    '&.ratio': {
        color: "#ccccff80"
    }
}))

const StyledTableRow = styled(TableRow)(() => ({
    '&:last-child td, &:last-child th': {
        border: "none"
    }
}))

type CellData = {
    text: string
    icon?: string
}

function createData(
    name: CellData,
    bet: CellData,
    multiplayer: CellData,
    last: CellData
) {
    return {name, bet, multiplayer, last}
}

const rows = [
    createData(
        {text: 'Infinite Room', icon: icon},
        {text: '25.00 SOL'},
        {text: '2 x'},
        {text: '25.00 SOL', icon: bitcoin}),
    createData(
        {text: 'Infinite Room', icon: icon},
        {text: '25.00 SOL'},
        {text: '2 x'},
        {text: '25.00 SOL', icon: bitcoin}),
    createData(
        {text: 'Infinite Room', icon: icon},
        {text: '25.00 SOL'},
        {text: '2 x'},
        {text: '25.00 SOL', icon: bitcoin}),
    createData(
        {text: 'Infinite Room', icon: icon},
        {text: '25.00 SOL'},
        {text: '2 x'},
        {text: '25.00 SOL', icon: bitcoin})
]

export default function CustomizedTables() {
    return (
        <TableContainer sx={{backgroundColor: "transparent", boxShadow: "none"}} component={Paper}>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Game Room</StyledTableCell>
                        <StyledTableCell align="right">Your Bet</StyledTableCell>
                        <StyledTableCell align="right">Multiplayer</StyledTableCell>
                        <StyledTableCell align="right">Last</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name.text}>
                            <StyledTableCell component="th" scope="row">
                                {row.name.icon ? <img src={row.name.icon} alt="Icon"/> : ""}
                                {row.name.text}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {row.bet.icon ? <img src={row.bet.icon} alt="Icon"/> : ""}
                                {row.bet.text}
                            </StyledTableCell>
                            <StyledTableCell align="right" className="ratio">
                                {row.multiplayer.icon ? <img src={row.multiplayer.icon} alt="Icon"/> : ""}
                                {row.multiplayer.text}
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                {row.last.icon ? <img src={row.last.icon} alt="Icon"/> : ""}
                                {row.last.text}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
