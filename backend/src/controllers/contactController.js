import prisma from '../lib/prisma.js';

/**
 * POST /api/contact
 * Validates presence of name, email, message, then persists a Contact record.
 *
 * @type {import('express').RequestHandler}
 */
export const submitContact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    // Basic presence validation
    if (!name || !email || !message) {
      const err = new Error('name, email, and message are required.');
      err.status = 400;
      return next(err);
    }

    const contact = await prisma.contact.create({
      data: { name, email, message },
    });

    return res.status(201).json(contact);
  } catch (err) {
    return next(err);
  }
};
