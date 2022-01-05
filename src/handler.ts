import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { RequestInput } from "./dto/BaseDTO";
import { internalServerError, success } from "./infra/http/apiTraffic";
import { rdsConnector } from "./infra/knex/Knex";
import { Logger } from "./utils/Logger";
import { ExampleDomain } from './domain/ExampleDomain'

const logger = new Logger('Lambda:BaseBoilerplate');

export const handler = async(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const input: RequestInput = JSON.parse(event.body);
        const result: ExampleDomain = await rdsConnector().where({ id: input.id }).first()
        if(!result) throw new Error('RESULT_NOT_FOUND');
        logger.info(result);
        return success(result);
    } catch(error) {
        logger.error(error);
        return internalServerError("INTERNAL_SERVER_ERROR", error);
    }
}