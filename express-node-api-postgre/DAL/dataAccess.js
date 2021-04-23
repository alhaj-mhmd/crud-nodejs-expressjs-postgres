const pool = require('../db');
const { delete } = require('../routes/user');


function getUsers(callBack){
    pool.query(`SELECT * FROM public."students" ORDER BY id ASC`, (error, results) => {
        if (error) throw error;
         
        callBack(results.rows);
    });
}

function getUser(id,callBack){
    pool.query(`SELECT * FROM public."students" Where id=${id} ORDER BY id ASC`, (error, results) => {
        if (error) throw error;
         
            callBack(results.rows);
    });
}

function postUser(student){
    pool.query('INSERT INTO public."students" (id,name) VALUES ($1,$2)', [student.id, student.name], (error, result) => {
        if (error) throw error
         
    });
};

function deleteUser(id){
    pool.query(`DELETE FROM public."students" Where id=${id}`, (error, results) => {
        if (error) throw error;
         
    });
}


function updateUser (id,student){
    pool.query(`UPDATE public."students" SET name=$1 WHERE id=$2 `, [student.name, id], (error, result) => {
        if (error) throw error;})
}

module.exports={
    getUsers:getUsers,
    getUser:getUser,
    postUser:postUser,
    deleteUser:deleteUser,
    updateUser:updateUser
    
}