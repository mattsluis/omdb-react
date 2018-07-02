import React, {Component} from 'react';

import Movie from 'components/omdb/movie/movie';

import Style from './style.scss';

export default class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        

        return (
            <div>
                <ul>
                    <Movie/>
                </ul>
            </div>
        )
    }
}





    generateList() {
        const { todos, todo } = this.props;

        const list = todos.map((todo) => {
            return (
                <li key={todo.id} className={Style.listEl} >
                    <Todo
                        todo={todo}
                        handleDelete={(event) => this.onDelete(todo.id)}
                        handleUpdate={this.onUpdate}
                    />
                </li>
            )
        });
        return list;
    }

    render() {
        return this.generateList();
    }

}
