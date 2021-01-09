/*
 * Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

package org.wso2.scim2.compliance.tests;

import org.apache.commons.lang.StringUtils;
import org.apache.http.Header;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.BasicResponseHandler;
import org.wso2.charon3.core.encoder.JSONDecoder;
import org.wso2.charon3.core.exceptions.BadRequestException;
import org.wso2.charon3.core.exceptions.CharonException;
import org.wso2.charon3.core.exceptions.InternalErrorException;
import org.wso2.charon3.core.schema.SCIMResourceSchemaManager;
import org.wso2.charon3.core.schema.SCIMResourceTypeSchema;
import org.wso2.scim2.compliance.entities.TestResult;
import org.wso2.scim2.compliance.exception.ComplianceException;
import org.wso2.scim2.compliance.exception.GeneralComplianceException;
import org.wso2.scim2.compliance.httpclient.HTTPClient;
import org.wso2.scim2.compliance.objects.SCIMResourceType;
import org.wso2.scim2.compliance.protocol.ComplianceTestMetaDataHolder;
import org.wso2.scim2.compliance.protocol.ComplianceUtils;
import org.wso2.scim2.compliance.tests.common.ResponseValidateTests;
import org.wso2.scim2.compliance.utils.ComplianceConstants;

import java.util.ArrayList;

/**
 * Implementation of ResourceType test cases.
 */
public class ResourceTypeTestImpl implements ResourceType {

    private ComplianceTestMetaDataHolder complianceTestMetaDataHolder;
    SCIMResourceType scimResourceType = null;

    public ResourceTypeTestImpl(ComplianceTestMetaDataHolder complianceTestMetaDataHolder) {

        this.complianceTestMetaDataHolder = complianceTestMetaDataHolder;
    }

    @Override
    public ArrayList<TestResult> getMethodTest() throws GeneralComplianceException, ComplianceException {

        ArrayList<TestResult> testResults;
        testResults = new ArrayList<>();
        Boolean errorOccured = false;
        // Construct the endpoint url.
        String url = complianceTestMetaDataHolder.getUrl() +
                ComplianceConstants.TestConstants.RESOURCE_TYPE_ENDPOINT;
        // Specify the get request.
        HttpGet method = new HttpGet(url);
        HttpClient client = HTTPClient.getHttpClient();
        method = (HttpGet) HTTPClient.setAuthorizationHeader(complianceTestMetaDataHolder, method);
        method.setHeader("Accept", "application/json");
        HttpResponse response = null;
        String responseString = StringUtils.EMPTY;
        String headerString = StringUtils.EMPTY;
        String responseStatus = StringUtils.EMPTY;
        ArrayList<String> subTests = new ArrayList<>();

        try {
            //get the resource types
            response = client.execute(method);
            // Read the response body.
            responseString = new BasicResponseHandler().handleResponse(response);
            //get all headers
            Header[] headers = response.getAllHeaders();
            for (Header header : headers) {
                headerString += header.getName() + " : " + header.getValue() + "\n";
            }
            responseStatus = response.getStatusLine().getStatusCode() + " "
                    + response.getStatusLine().getReasonPhrase();
        } catch (Exception e) {
            Header[] headers = response.getAllHeaders();
            for (Header header : headers) {
                headerString += header.getName() + " : " + header.getValue() + "\n";
            }
            responseStatus = response.getStatusLine().getStatusCode() + " "
                    + response.getStatusLine().getReasonPhrase();
            testResults.add(new TestResult
                    (TestResult.ERROR, "Get ResourceType",
                            "Could not get ResourceType at url " + url,
                            ComplianceUtils.getWire(method, responseString,
                                    headerString, responseStatus, subTests)));
            errorOccured = true;
        }
        if (response.getStatusLine().getStatusCode() == 200) {
            //obtain the schema corresponding to resourceType
            SCIMResourceTypeSchema schema = SCIMResourceSchemaManager.
                    getInstance().getResourceTypeResourceSchema();
            JSONDecoder jsonDecoder = new JSONDecoder();
            try {
                scimResourceType =
                        (SCIMResourceType) jsonDecoder.decodeResource(responseString, schema,
                                new SCIMResourceType());
                complianceTestMetaDataHolder.setScimResourceType(scimResourceType);

            } catch (BadRequestException | CharonException | InternalErrorException e) {
                testResults.add(new TestResult(TestResult.ERROR,
                        "Get ResourceType",
                        "Could not decode the server response",
                        ComplianceUtils.getWire(method, responseString, headerString, responseStatus, subTests)));
                errorOccured = true;
            }
            try {
                ResponseValidateTests.runValidateTests(scimResourceType, schema, null,
                        null, method,
                        responseString, headerString, responseStatus, subTests);

            } catch (BadRequestException | CharonException e) {
                testResults.add(new TestResult(TestResult.ERROR,
                        "Get ResourceType",
                        "Response Validation Error",
                        ComplianceUtils.getWire(method, responseString, headerString, responseStatus, subTests)));
                errorOccured = true;
            } catch (GeneralComplianceException e) {
                testResults.add(new TestResult(TestResult.ERROR,
                        "Get ResourceType",
                        e.getResult().getMessage(), ComplianceUtils.getWire(method,
                        responseString, headerString, responseStatus, subTests)));
                errorOccured = true;
            }
            if (errorOccured == false) {
                testResults.add(new TestResult
                        (TestResult.SUCCESS, "Get ResourceType",
                                StringUtils.EMPTY, ComplianceUtils.getWire(method, responseString, headerString,
                                responseStatus, subTests)));
            }
        } else {
            testResults.add(new TestResult
                    (TestResult.ERROR, "Get ServiceProviderConfig",
                            StringUtils.EMPTY, ComplianceUtils.getWire(method, responseString, headerString,
                            responseStatus, subTests)));
        }
        return testResults;
    }

    @Override
    public ArrayList<TestResult> getByIdMethodTest() throws GeneralComplianceException, ComplianceException {

        return null;
    }

    @Override
    public ArrayList<TestResult> postMethodTest() throws GeneralComplianceException, ComplianceException {

        return null;
    }

    @Override
    public ArrayList<TestResult> patchMethodTest() throws GeneralComplianceException, ComplianceException {

        return null;
    }

    @Override
    public ArrayList<TestResult> putMethodTest() throws GeneralComplianceException, ComplianceException {

        return null;
    }

    @Override
    public ArrayList<TestResult> deleteMethodTest() throws GeneralComplianceException, ComplianceException {

        return null;
    }

    @Override
    public ArrayList<TestResult> searchMethodTest() throws GeneralComplianceException, ComplianceException {

        return null;
    }

    @Override
    public ArrayList<TestResult> executeAllTests() throws GeneralComplianceException, ComplianceException {

        return null;
    }
}
