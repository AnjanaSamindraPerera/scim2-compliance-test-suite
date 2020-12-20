/*
 * Copyright (c) 2017, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.wso2.scim2.compliance.utils;

/**
 * This class contains the constances used in.
 */
public class ComplianceConstants {

    /**
     * This method contains the constants used in a  request.
     */
    public static class RequestCodeConstants {

        public static final String URL = "url";
        public static final String USERNAME = "username";
        public static final String PASSWORD = "password";
        public static final String CLIENT_ID = "clientId";
        public static final String CLIENT_SECRET = "clientSecret";
        public static final String AUTHORIZATION_SERVER = "authorizationServer";
        public static final String AUTHORIZATION_HEADER = "authorizationHeader";
        public static final String AUTHORIZATION_METHOD = "authMethod";

        public static final String HTTP = "http";
        public static final String HTTPS = "https";
    }

    /**
     * This method contains the constants used in  tests.
     */
    public static class TestConstants {

        public static final String LABEL_IMPORTANT = "label-important";
        public static final String LABEL_SUCCESS = "label-success";
        public static final String LABEL_INFO = "label-info";

        public static final String FAILED = "Failed";
        public static final String SUCCESS = "Success";
        public static final String SKIPPED = "Skipped";

        public static final String SERVICE_PROVIDER_ENDPOINT = "/ServiceProviderConfig";
        public static final String RESOURCE_TYPE_ENDPOINT = "/ResourceType";
        public static final String USERS_ENDPOINT = "/Users";
        public static final String GROUPS_ENDPOINT = "/Groups";
        public static final String ME_ENDPOINT = "/Me";
        public static final String BULK_ENDPOINT = "/Bulk";
        public static final String SCHEMAS_ENDPOINT = "/Schemas";

        public static final String SCHEMA_LIST_TEST = "Schema List Test";
        public static final String REQUIRED_ATTRIBUTE_TEST = "Required Attribute Test";
        public static final String ATTRIBUTE_MUTABILITY_TEST = "Attribute Mutability Test";
        public static final String ALL_GROUPS_IN_TEST = "All Groups In Test";
        public static final String ALL_USERS_IN_TEST = "All Users In Test";
        public static final String PAGINATION_USER_TEST = "Pagination User Test";
        public static final String PAGINATION_GROUP_TEST = "Pagination Group Test";
        public static final String FILTER_CONTENT_TEST = "Filter Content Test";
        public static final String SORT_USERS_TEST = "Sort Users Test";
        public static final String FILTER_USER_WITH_PAGINATION = "Filter with pagination Test";
        public static final String SORT_GROUPS_TEST = "Sort Groups Test";

        public static final String EXTENSION_SCHEMA_URI =
                "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User";
    }

    /**
     * This method contains the defined constants used in tests.
     */
    public static class DefinedInstances {

        public static String DEFINED_USER_PASSWORD = "7019asd84";
        public static String DEFINED_USER_USERNAME = "bjensenexamplecom";

        public static String DEFINED_USER =
                "{\"name\":{\"givenName\":\"Kim\",\"familyName\":\"Berry\"},\"password\": \"7019asd84\",\"userName\":" +
                        " \"loginUser\",\"emails\":[{" +
                        "\"value\": \"kim@example.com\",\"type\": \"work\",\"primary\": true },{" +
                        "\"value\": \"kim@jensen.org\",\"type\": \"home\"}], " +
                        "\"urn:ietf:params:scim:schemas:extension:enterprise:2.0:User\": {\"employeeNumber\": " +
                        "\"1234A\",\"manager\": {\"value\": \"Taylor\"}}}";

        public static String definedUser1 =
                "{\"name\":{\"givenName\":\"Samindra\",\"familyName\":\"Perera\"},\"password\": \"7019asd84\"," +
                        "\"userName\": \"loginUser1\",\"emails\":[{" +
                        "\"value\": \"Samindra@example.com\",\"type\": \"work\",\"primary\": true },{" +
                        "\"value\": \"Samindra@jensen.org\",\"type\": \"home\"}], " +
                        "\"urn:ietf:params:scim:schemas:extension:enterprise:2.0:User\": {\"employeeNumber\": " +
                        "\"12345A\",\"manager\": {\"value\": \"Taylor\"}}}";

        public static String definedUser2 =
                "{\"name\":{\"givenName\":\"Danny\",\"familyName\":\"Gomez\"},\"password\": \"7019asd84\"," +
                        "\"userName\":" +
                        " \"loginUser2\",\"emails\":[{" +
                        "\"value\": \"danny@example.com\",\"type\": \"work\",\"primary\": true },{" +
                        "\"value\": \"danny@jensen.org\",\"type\": \"home\"}], " +
                        "\"urn:ietf:params:scim:schemas:extension:enterprise:2.0:User\": {\"employeeNumber\": " +
                        "\"123456A\",\"manager\": {\"value\": \"Taylor\"}}}";

        public static String definedUser3 =
                "{\"name\":{\"givenName\":\"Jason\",\"familyName\":\"Diesel\"},\"password\": \"7019asd84\"," +
                        "\"userName\":" +
                        " \"loginUser3\",\"emails\":[{" +
                        "\"value\": \"json@example.com\",\"type\": \"work\",\"primary\": true },{" +
                        "\"value\": \"json@jensen.org\",\"type\": \"home\"}], " +
                        "\"urn:ietf:params:scim:schemas:extension:enterprise:2.0:User\": {\"employeeNumber\": " +
                        "\"1234567A\",\"manager\": {\"value\": \"Taylor\"}}}";

        public static String definedUser4 =
                "{\"name\":{\"givenName\":\"Tom\",\"familyName\":\"Hardy\"},\"password\": \"7019asd84\",\"userName\":" +
                        " \"loginUser4\",\"emails\":[{" +
                        "\"value\": \"tom@example.com\",\"type\": \"work\",\"primary\": true },{" +
                        "\"value\": \"tom@jensen.org\",\"type\": \"home\"}], " +
                        "\"urn:ietf:params:scim:schemas:extension:enterprise:2.0:User\": {\"employeeNumber\": " +
                        "\"12345678A\",\"manager\": {\"value\": \"Taylor\"}}}";

        public static String definedUser5 =
                "{\"name\":{\"givenName\":\"Taylor\",\"familyName\":\"Swift\"},\"password\": \"7019asd84\"," +
                        "\"userName\":" +
                        " \"loginUser5\",\"emails\":[{" +
                        "\"value\": \"taylorn@example.com\",\"type\": \"work\",\"primary\": true },{" +
                        "\"value\": \"taylor@jensen.org\",\"type\": \"home\"}], " +
                        "\"urn:ietf:params:scim:schemas:extension:enterprise:2.0:User\": {\"employeeNumber\": " +
                        "\"1234567890A\",\"manager\": {\"value\": \"Taylor\"}}}";

        public static String definedUpdatedUser1 =
                "{\"name\":{\"givenName\":\"Kims\",\"familyName\":\"Berry\"},\"password\": \"7019asd85\"," +
                        "\"userName\":" +
                        " \"loginUser\",\"emails\":[{" +
                        "\"value\": \"kim@example.com\",\"type\": \"work\",\"primary\": true },{" +
                        "\"value\": \"kim@jensen.org\",\"type\": \"home\"}], " +
                        "\"urn:ietf:params:scim:schemas:extension:enterprise:2.0:User\": {\"employeeNumber\": " +
                        "\"1234A\",\"manager\": {\"value\": \"Taylor\"}}}";

        public static String definedUpdatedUser2 =
                "{\"name\":{\"givenName\":\"Kimi\",\"familyName\":\"Berry\"},\"password\": \"7019asd85\"," +
                        "\"userName\":" +
                        " \"loginUserUpdated\",\"emails\":[{" +
                        "\"value\": \"kimi@wso2.com\",\"type\": \"work\",\"primary\": true },{" +
                        "\"value\": \"kim@example.org\",\"type\": \"home\"}], " +
                        "\"urn:ietf:params:scim:schemas:extension:enterprise:2.0:User\": {\"employeeNumber\": " +
                        "\"1234A\",\"manager\": {\"value\": \"Taylor\"}}}";

        public static String definedPatchUserPayload1 =
                "{\"schemas\":[\"urn:ietf:params:scim:api:messages:2.0:PatchOp\"]," +
                        "\"Operations\":[{\"op\":\"add\",\"value\":{\"nickName\":\"shaggy\"}}]}";

        public static String definedPatchUserPayload2 =
                "{\"schemas\":[\"urn:ietf:params:scim:api:messages:2.0:PatchOp\"],\"Operations\":[{\"op\":\"remove\"," +
                        "\"path\":\"emails[type eq \\\"work\\\" and value ew \\\"example.com\\\"]\"}]}";

        public static String definedPatchUserPayload3 =
                "{\"schemas\":[\"urn:ietf:params:scim:api:messages:2.0:PatchOp\"]," +
                        "\"Operations\":[{\"op\":\"replace\",\"path\":\"emails[type eq \\\"home\\\"]\"," +
                        "\"value\":{\"type\":\"home\",\"value\":\"home@example.com\"}}]}";

        public static String DEFINED_BULK_REQUEST = "{\"failOnErrors\":1,\"schemas\":" +
                "[\"urn:ietf:params:scim:api:messages:2.0:BulkRequest\"],\"Operations\":" +
                "[{\"method\": \"POST\",\"path\": \"/Users\",\"bulkId\": \"qwerty\",\"data\":" +
                "{\"schemas\":[\"urn:ietf:params:scim:schemas:core:2.0:User\"],\"userName\": " +
                "\"Alice\",\"password\":\"sachini\"}},{\"method\": \"POST\",\"path\": \"/Users\"," +
                "\"bulkId\":\"ytrewq\",\"data\":{\"schemas\":[\"urn:ietf:params:scim:schemas:core:2.0:User\"," +
                "\"urn:ietf:params:scim:schemas:extension:enterprise:2.0:User\"],\"userName\":\"Bob\"," +
                "\"password\":\"vindula\"}}]}";
    }
}
