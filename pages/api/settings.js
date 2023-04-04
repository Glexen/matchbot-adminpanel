export default function handler(req, res){
    fetch('http://localhost:3000/api/botSettings/change', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
    })
    fetch('http://localhost:3000/api/languageProfile/change', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
    })
}