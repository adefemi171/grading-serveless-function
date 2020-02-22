module.exports = function (context, req) {
    context.log('A simple Grading System');
    if (req.body && req.body.gradings) {
        req.body.gradings.forEach(function(grading) {

            if(grading.score>=70) {
                grading.status = 'A';
            } else if (grading.score>=60 && grading.score < 70) {
                grading.status = 'B';

            } else if (grading.score>=50 && grading.score < 60){
                grading.status = 'C'
            } else {
                grading.status = 'D'
            }
            context.log('Grade is ' + grading.status);
        });

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: {
                "gradings": req.body.gradings
            }
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please send an array of gradings in the request body"
        };
    }
    context.done();
};