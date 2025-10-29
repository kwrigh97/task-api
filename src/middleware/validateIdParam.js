import { param, validationResult } from 'express-validator';

export const validateIdParam = [
    param('id').isInt().withMessage('ID must be a number'),

    (req, res, next) => {
        const errors = validationResult(req);
        
        if(!errors.isEmpty()){
            return res.status(400).json({
                error: 'Validation failed',
                details: errors.array().map(err => err.msg),
            });
        }

        next();
    },
];