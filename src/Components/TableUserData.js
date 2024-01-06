import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { useTheme } from '../Context/ThemeContext';

const TableUserData = ({ data }) => {
  // Extract the theme object from the ThemeContext
  const { theme } = useTheme();

  return (
    <div className='table'>
      <TableContainer>
        <Table>
          <TableHead>
            {/* Table header with column names */}
            <TableRow>
              <TableCell style={{ color: theme.textColor, textAlign: 'center' }}>wpm</TableCell>
              <TableCell style={{ color: theme.textColor, textAlign: 'center' }}>Accuracy</TableCell>
              <TableCell style={{ color: theme.textColor, textAlign: 'center' }}>Characters</TableCell>
              <TableCell style={{ color: theme.textColor, textAlign: 'center' }}>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Map through data to populate the table rows */}
            {data.map((item, index) => (
              <TableRow key={index}>
                {/* Display data in each cell */}
                <TableCell style={{ color: theme.textColor, textAlign: 'center' }}>{item.wpm}</TableCell>
                <TableCell style={{ color: theme.textColor, textAlign: 'center' }}>{item.accuracy}</TableCell>
                <TableCell style={{ color: theme.textColor, textAlign: 'center' }}>{item.characters}</TableCell>
                <TableCell style={{ color: theme.textColor, textAlign: 'center' }}>{item.timeStamp.toDate().toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableUserData;
