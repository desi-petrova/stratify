const Customers = require("../models/customer.js")

// CREATE
exports.createCustomer = async (req, res) => {
  try {
    const customer = new Customers(req.body)

    await customer.save()

    res.status(201).json(customer)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// GET ALL
exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customers.find()

    res.json(customers)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// UPDATE
exports.updateCustomer = async (req, res) => {
  try {
    const customer = await Customers.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    res.json(customer)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// DELETE
exports.deleteCustomer = async (req, res) => {
  try {
    await Customers.findByIdAndDelete(req.params.id)

    res.json({ message: "Customer deleted" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}