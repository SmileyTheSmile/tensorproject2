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

    read(id){
        return this.query(
            `${options.object}/${id}`, 
            {
                method: 'GET'
            }
        );
    }

    create(){

    }

    delete(){

    }
}

export default DataSet;