class DataSet{
    constructor(options){
        this.options = {
            host: 'localhost:3000/api/',
            model: options.model,
            object: options.object
        }
    }

    query(query, options, params){
        let url = new URL(this.options.host);
        url.pathname += query;
        for (let k in params){
            url.searchParams.set(k, params[k]);
        }
        return fetch(url, options)
            .then(response => response.json());
    }

    toPersonModel(result){
        return new (this.options.model)(result);
    }

    list(page, limit){
        return this.query(
            `${options.object}/${id}`, 
            {
                method: 'GET'
            },
            {
                '_page':page,
                '_limit': limit
            }
            .then( results => {
                return results.map((result) => this.toPersonModel(result))
            })
        )
    }

    read(id){
        return this.query(
            `${options.object}/${id}`, 
            {
                method: 'GET'
            }
            .then( result => {
                return this.toPersonModel(result)
            })
        );
    }

    create(data){
        return this.query(
            `${this.options.object}`,
            {
                method: 'POST',
                body: data
            }
            .then( result => {
                return this.toPersonModel(result)
            })
        )
    }

    update(data){
        return this.query(
            `${this.options.object}/${id}`,
            {
                method: 'PATCH',
                body: data
            }
        )
    }
    
    delete(id, data){
        return this.query(
            `${this.options.object}/${id}`,
            {
                method: 'DELETE',
                body: data
            }
        )
    }
};

export default DataSet;