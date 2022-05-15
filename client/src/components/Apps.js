import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { Context } from '..';
import Applications from '../pages/Applications';

const Apps = observer(() => {
    const { book } = useContext(Context) // получаем bookStore, c помощью хука
    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>ФИО</th>
                    <th>Размер бокса</th>
                    <th>Расположение бокса</th>
                    <th>E-mail пользователя</th>

                </tr>
            </thead>
            <tbody>
                {book.applications.map(application =>
                    <tr>
                        <td>{application.id}</td>
                        <td>{application.completed}</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                )}
                {/* <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    
                </tr>
                <tr>
                    <td>2</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    
                </tr>
                <tr>
                    <td>3</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    
                </tr> */}
            </tbody>
        </Table>
    );
});

export default Apps;