/**
 * @swagger
 * /api/trainers:
 *   get:
 *     summary: Retrieve all trainers
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of trainers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Trainer'
 *   post:
 *     summary: Create a new trainer
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Trainer'
 *     responses:
 *       201:
 *         description: Trainer created successfully
 */

/**
 * @swagger
 * /api/trainers/{id}:
 *   get:
 *     summary: Retrieve a trainer by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "507f1f77bcf86cd799439011"
 *         description: The trainer ID
 *     responses:
 *       200:
 *         description: A single trainer
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Trainer'
 *   put:
 *     summary: Update a trainer by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "507f1f77bcf86cd799439011"
 *         description: The trainer ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Trainer'
 *     responses:
 *       200:
 *         description: Trainer updated successfully
 *   delete:
 *     summary: Delete a trainer by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "507f1f77bcf86cd799439011"
 *         description: The trainer ID
 *     responses:
 *       200:
 *         description: Trainer deleted successfully
 */
