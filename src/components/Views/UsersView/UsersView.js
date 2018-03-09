import React, {Component} from 'react'
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react'

class UsersView extends Component {



render() {
    return (

<React.Fragment>
    <Table compact celled definition>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell>nazwa użytkownika</Table.HeaderCell>
                <Table.HeaderCell>Życzenia</Table.HeaderCell>
                <Table.HeaderCell>adres email</Table.HeaderCell>
                <Table.HeaderCell>data</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            <Table.Row>
                <Table.Cell collapsing>
                    <Checkbox label="Wyślij automatycznie"/>
                </Table.Cell>
                <Table.Cell>John Lilki</Table.Cell>
                <Table.Cell>September 14, 2013</Table.Cell>
                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                <Table.Cell>No</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell collapsing>
                    <Checkbox slider />
                </Table.Cell>
                <Table.Cell>Jamie Harington</Table.Cell>
                <Table.Cell>January 11, 2014</Table.Cell>
                <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                <Table.Cell>Yes</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell collapsing>
                    <Checkbox slider />
                </Table.Cell>
                <Table.Cell>Jill Lewis</Table.Cell>
                <Table.Cell>May 11, 2014</Table.Cell>
                <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                <Table.Cell>Yes</Table.Cell>
            </Table.Row>
        </Table.Body>

        <Table.Footer fullWidth>
            <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell colSpan='4'>
                    <Button floated='right' icon labelPosition='left' primary size='small'>
                        <Icon name='user' /> Add User
                    </Button>
                    <Button size='small'>Approve</Button>
                    <Button disabled size='small'>Approve All</Button>
                </Table.HeaderCell>
            </Table.Row>
        </Table.Footer>
    </Table>
</React.Fragment>

    )

}
}

export default UsersView