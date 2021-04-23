const express = require('express');
const dal = require('../DAL/dataAccess');
const router = express.Router();
const pool = require('../db');

// router.get('', (req, res) => {
//     pool.query(`SELECT * FROM public."students" ORDER BY id ASC`, (error, results) => {
//         if (error) throw error;
//         else
//             res.status(200).json(results.rows);
//     });
// });
router.get('', (req, res) => {
    dal.getUsers(data => {
        res.status(200).json(data);
    });
});
// router.get('/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     pool.query(`SELECT * FROM public."students" Where id=${id} ORDER BY id ASC`, (error, results) => {
//         if (error) throw error;
//         else
//             res.status(200).json(results.rows);
//     });
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // pool.query(`SELECT * FROM public."students" Where id=${id} ORDER BY id ASC`, (error, results) => {
    //     if (error) throw error;
    //     else
    //         res.status(200).json(results.rows);
    // });
    dal.getUser(id, data => {
        res.status(200).json(data);
    });




    // another way to pass id bu array
    // pool.query(`SELECT * FROM public."students" Where id=$1 ORDER BY id ASC`,[id] ,(error, results) => {
    //     if (error) throw error;
    //     else
    //         res.status(200).json(results.rows);
    // });
});


//post student
// router.post('/', (req, res) => {
//     const { id, name } = req.body;
//     pool.query('INSERT INTO public."students" (id,name) VALUES ($1,$2)', [id, name], (error, result) => {
//         if (error) throw error
//         else
//             res.status(201).send(`User added with ID: ${id}`)
//     });
// });

router.post('/', (req, res) => {
    const student = req.body;
    dal.postUser(student);
    res.status(201).send(`User added with ID: ${id}`)
});



// update user 
// router.put('/:id', (req, res) => {
//     const id = req.params.id;
//     const { name } = req.body;
//     pool.query(`UPDATE public."students" SET name=$1 WHERE id=$2 `, [name, id], (error, result) => {
//         if (error) throw error;
//         else
//             res.status(200).send(`User update`);
//     });
// });
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const student = { ...req.body };
dal.updateUser(id,student);
    res.status(200).send(`User update`);

});

// delete user 
// router.delete('/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     pool.query(`DELETE FROM public."students" Where id=${id}`, (error, results) => {
//         if (error) throw error;
//         else
//             res.status(200).send("User Deleted");
//     });

// });

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    dal.deleteUser(id);
    res.status(200).send("User Deleted");

});

module.exports = router;