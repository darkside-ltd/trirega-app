// /api/workTask/search

// default contains search
// {
//     "requestedFor":"Ung, Felix - 100",
//     "page": 0,
//     "pageSize": 100
// }

// Status / specific field
// {
//     "status": "Active",
//     "page": 0,
//     "pageSize": 100
// }

// Date Range
// {
//     "modified": [
//         {
//             "operator": "greater than or equals",
//             "value": "2023-05-01T08:33:58.576+02:00"
//         },
//         {
//             "operator": "less than or equals",
//             "value": "2023-06-30T08:33:58.576+02:00"
//         }
//     ],
//     "page": 0,
//     "pageSize": 100
// }


// operators ['greater than or equals','less than or equals']

const baseUrl = import.meta.env.VITE_AUTH_API_URL;
// import { useRouter } from 'vue-router';
// const router = useRouter();

export function searchQuery(event) {
    const e = event
    const target = e.target
    const value = target.value
    console.log({ baseUrl }, value)

    // create an object
    let body = {
        "page": 0,
        "pageSize": 100
    }

    // body.description = value
    body.taskName = value
    // body.requestClass = value
    // body.modifiedBy = value

    console.log({body})

    // router.push({ name: 'search', query: { query: searchQuery.value } });

}

export function searchField(event) {
    const e = event
    const target = e.target
    const value = target.value
    console.log({ baseUrl }, value)

    // create an object
    let body = {
        "page": 0,
        "pageSize": 100
    }

    // body.description = value
    body.taskName = value
    // body.requestClass = value
    // body.modifiedBy = value

    console.log({body})

    // router.push({ name: 'search', query: { query: searchQuery.value } });

}