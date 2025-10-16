/**
 * @swagger
 * /api/pokemons:
 *   get:
 *     summary: Retrieve all pokemons
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of pokemons
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pokemon'
 *   post:
 *     summary: Create a new pokemon
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pokemon'
 *     responses:
 *       201:
 *         description: Pokemon created successfully
 */

/**
 * @swagger
 * /api/pokemons/{id}:
 *   get:
 *     summary: Retrieve a pokemon by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "68e8e045dd0bfa6e252ac1d9"
 *         description: The pokemon ID
 *     responses:
 *       200:
 *         description: A single pokemon
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pokemon'
 *   put:
 *     summary: Update a pokemon by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "68e8e045dd0bfa6e252ac1d2"
 *         description: The pokemon ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pokemon'
 *     responses:
 *       200:
 *         description: Pokemon updated successfully
 *   delete:
 *     summary: Delete a pokemon by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "68e8e045dd0bfa6e252ac1d5"
 *         description: The pokemon ID
 *     responses:
 *       200:
 *         description: Pokemon deleted successfully
 */
