import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base('appml7E91jjekxPeY');

// Return n records from the table "Programs"
export async function load({ params }) {
	const records = await base('Programs').select({ maxRecords: 3 }).all();
	// console.log(records);
	return { records: records.map((record) => record.fields) };
}
