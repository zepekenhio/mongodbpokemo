/**
 * @swagger
 * /api/zones:
 *   get:
 *     summary: Retrieve all zones
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of zones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Zone'
 *   post:
 *     summary: Create a new zone
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Zone'
 *     responses:
 *       201:
 *         description: Zone created successfully
 */

/**
 * @swagger
 * /api/zones/{id}:
 *   get:
 *     summary: Retrieve a zone by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "507f1f77bcf86cd799439011"
 *         description: The zone ID
 *     responses:
 *       200:
 *         description: A single zone
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Zone'
 *   put:
 *     summary: Update a zone by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "507f1f77bcf86cd799439011"
 *         description: The zone ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Zone'
 *     responses:
 *       200:
 *         description: Zone updated successfully
 *   delete:
 *     summary: Delete a zone by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "507f1f77bcf86cd799439011"
 *         description: The zone ID
 *     responses:
 *       200:
 *         description: Zone deleted successfully
 */
