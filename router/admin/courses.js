
import express from "express";
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
router.get('/', function(req, res) {
  res.send('Admin : Listing s of courses page');
});
router.get('/:idCourse', function(req, res) {
  res.send('Admin : A page of a course: ' + req.params.idCourse);
});

router.post('/', function(req, res){
  res.send('Admin : Add a post')
})

router.put('/:idCourse', function(req, res){
  res.send('Admin : Update a post')
})

router.delete('/:idCourse', function(req, res){
  res.send('Admin : Delete the course : ' + req.params.idCourse)
})

export default router; 

